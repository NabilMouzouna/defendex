'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from "@/lib/data/categoriesList"



const CategoryCard = ({ category, index }: { category: typeof categories[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="transition-all bg-white rounded-xl overflow-hidden shadow-lg hover:border-2 border-black"
    >
      <div className="relative h-48">
        <Image
          src={category.image}
          alt={category.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg">
          <category.icon className="w-6 h-6 text-gray-700" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h2>
        <div className="flex flex-wrap gap-2">
          {category.capabilities.map((capability, capIndex) => (
            <motion.div
              key={capIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: capIndex * 0.05 }}
            >
              <Link href={`/products/${category.id}/${capIndex}`}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                >
                  {capability}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProductCategories() {
  return (
    <div className="min-h-screen bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Products & Capabilities
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}