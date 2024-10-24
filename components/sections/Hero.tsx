'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { placeholderData } from '@/lib/data/landing-page/placeholder';
import { fadeInUp } from '@/lib/animations/variants';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={placeholderData.heroVideoUrl} type="video/mp4" />
      </video>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 text-center text-[#eeeeee]"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold mb-4"
        >
          {placeholderData.heroTitle}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl mb-8"
        >
          {placeholderData.heroSubtitle}
        </motion.p>
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#eeeeee] text-[#000] px-8 py-3 rounded-full font-semibold hover:bg-[#979797] transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};