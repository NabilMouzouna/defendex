'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Products as ProductsList } from '@/lib/data/landing-page/productsList';
import { scaleIn, staggerContainer } from '@/lib/animations/variants';

export const Products = () => {
  return (
    <section className="py-20 bg-[#222]">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#eeeeee]"
        >
          Our Products & Capabilities
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ProductsList.map((product, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-[#333] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#eeeeee]">{product.name}</h3>
                <p className="text-[#979797] mb-4">{product.description}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-[#eeeeee] hover:text-[#979797] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};