'use client'
import React, { useState, useEffect } from 'react';
import { Navbar } from './navigation/Navbar';
import { Footer } from './sections/Footer';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';
import { placeholderData as SupportData } from '@/lib/data/support-page/placeholder';
import { placeholderData as ReachUsData } from '@/lib/data/reachUs/placeholder';
import { placeholderData as AboutData } from '@/lib/data/about/placeholder';

type PageBoneProps = {
  page: 'About' | 'Support' | 'ReachUs';
};

type HeroTypes = {
  heroBackground: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
};

const PageBone = ({ page }: PageBoneProps) => {
  const [placeholderData, setPlaceholderData] = useState<HeroTypes>({
    heroBackground: '',
    heroTitle: '',
    heroSubtitle: '',
    heroButton: '',
  });

  useEffect(() => {
    if (page === 'Support') { setPlaceholderData(SupportData); }
    if (page === 'ReachUs') { setPlaceholderData(ReachUsData); }
    if (page === 'About') { setPlaceholderData(AboutData); }
  }, [page]);

  return (
    <>
      <Navbar />
      <Hero
        heroBackground={placeholderData.heroBackground}
        heroTitle={placeholderData.heroTitle}
        heroSubtitle={placeholderData.heroSubtitle}
        heroButton="Contact Support"
      />
      <Footer />
    </>
  );
};

const Hero = ({
  heroBackground,
  heroTitle,
  heroSubtitle,
  heroButton,
}: HeroTypes) => {
  return (
    <section
      className="relative h-screen"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 text-center text-[#eeeeee]"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold mb-4">
            {heroTitle}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl mb-8">
            {heroSubtitle}
          </motion.p>
          <motion.a
            href="#contact-form"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#eeeeee] text-[#000] px-8 py-3 rounded-full font-semibold hover:bg-[#979797] transition-colors"
          >
            {heroButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBone;