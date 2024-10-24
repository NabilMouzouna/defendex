'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward } from 'lucide-react';
import { placeholderData } from '@/lib/data/landing-page/placeholder'; 
export function Presentation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  
  const { presentationTitle, presentationDescription, presentationVideoUrl } = placeholderData; 
  const videoUrl = presentationVideoUrl;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = (x / bounds.width) * 100;
    const time = (percentage / 100) * duration;
    videoRef.current.currentTime = time;
    setProgress(percentage);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skipTime = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime += seconds;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative w-full bg-white"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Introductory Text */}
      <div className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-gray-800"
          >
            {presentationTitle}
          </motion.h2>
          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-lg text-gray-600  mx-auto mb-12"
          >
            {presentationDescription}
          </motion.p>
        </div>
      </div>

      {/* Video Section */}
      <div className="aspect-w-16 aspect-h-9 w-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={togglePlay}
          autoPlay
          muted={isMuted}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Video Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4"
          >
            {/* Progress Bar */}
            <div
              className="w-full h-1 bg-gray-300 rounded-full mb-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-blue-600 rounded-full relative"
                style={{ width: `${progress}%` }}
                layoutId="progress"
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-lg" />
              </motion.div>
            </div>

            <div className="container mx-auto flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </motion.button>
                <span className="text-white text-sm">
                  {videoRef.current && formatTime(videoRef.current.currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Center Controls */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => skipTime(-10)}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
                >
                  <SkipBack size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => skipTime(10)}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
                >
                  <SkipForward size={24} />
                </motion.button>
              </div>

              {/* Right Controls */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
              >
                {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}