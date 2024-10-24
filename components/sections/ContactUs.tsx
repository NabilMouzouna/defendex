'use client'
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-black px- py-5'>
        <h1 className='text-white text-center'>Reach out to discuss your security needs by filling out our contact form, and we’ll get back to you soon!</h1>
        <div className='flex justify-center items-center'>
            <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#eeeeee] text-[#000] mx-8 my-5 px-8 py-3 rounded-full font-semibold hover:bg-[#979797] transition-colors"
        >
          Contact Us
        </motion.button>
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#eeeeee] text-[#000] px-8 py-3 rounded-full font-semibold hover:bg-[#979797] transition-colors"
        >
          Support
        </motion.button>
        </div>
    </div>
  )
}

export default ContactUs