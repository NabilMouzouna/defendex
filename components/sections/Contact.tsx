'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export const Contact = () => {
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
          Contact Us
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-[#333] text-[#eeeeee]"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-[#333] text-[#eeeeee]"
                placeholder="your@email.com"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-[#333] text-[#eeeeee]"
                placeholder="Your message..."
              ></textarea>
            </motion.div>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#eeeeee] text-[#111] py-2 px-4 rounded-md hover:bg-[#979797] transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};