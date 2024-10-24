'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { placeholderData } from '@/lib/data/placeholder';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

export const GlobalPresence = () => {
  return (
    <section className="py-20 bg-[#111] text-[#eeeeee]">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {placeholderData.globalPresence.title}
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src={placeholderData.globalPresence.image}
              alt="Global Presence"
              width={400}
              height={400}
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-8"
          >
            {placeholderData.globalPresence.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-[#979797]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};