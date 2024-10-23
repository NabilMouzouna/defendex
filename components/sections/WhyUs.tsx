'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Scale, Lightbulb } from 'lucide-react';
import { placeholderData } from '@/lib/data/placeholder';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const iconMap = {
  Target,
  Brain,
  Scale,
  Lightbulb,
};

export const WhyUs = () => {
  return (
    <section className="py-20 bg-[#222]">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6 text-[#eeeeee]"
        >
          {placeholderData.whyUsContent.title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center text-[#979797] mb-12 max-w-3xl mx-auto"
        >
          {placeholderData.whyUsContent.description}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {placeholderData.whyUsContent.cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-[#333] p-6 rounded-lg shadow-md flex items-start"
              >
                <Icon className="w-12 h-12 mr-4 text-[#eeeeee]" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#eeeeee]">{card.title}</h3>
                  <p className="text-[#979797]">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};