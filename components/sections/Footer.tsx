'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { placeholderData } from '@/lib/data/landing-page/placeholder';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

export const Footer = () => {
  return (
    <footer className="bg-[#222] text-[#eeeeee] py-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-[#979797]">{placeholderData.footerAbout}</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {placeholderData.footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#979797] hover:text-[#eeeeee] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-[#979797]">{placeholderData.footerContact.address}</p>
            <p className="text-[#979797]">{placeholderData.footerContact.phone}</p>
            <p className="text-[#979797]">{placeholderData.footerContact.email}</p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#333] text-center"
        >
          <p className="text-[#979797]">
            © {new Date().getFullYear()} {placeholderData.companyName}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};