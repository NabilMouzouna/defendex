'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { placeholderData } from '@/lib/data/placeholder';
import { navVariants, menuItemVariants, submenuVariants } from '@/lib/animations/variants';

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.5, 1]);
  const navBackgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']
  );

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: navBackgroundColor,
        opacity: navOpacity,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#eeeeee]">
            {placeholderData.companyName}
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#eeeeee] hover:text-[#979797]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {placeholderData.navItems.map((item, index) => (
              <div
                key={index}
                className="relative inline-block"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-[#eeeeee] hover:text-[#979797] transition-colors flex items-center"
                  >
                    {item.label}
                    {item.hasSubmenu && (
                      <span className="ml-1 transition-transform duration-300 inline-block">
                        {hoveredItem === item.label ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </span>
                    )}
                  </Link>
                </motion.div>
                {item.hasSubmenu && hoveredItem === item.label && (
                  <motion.div
                    variants={submenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute left-0 mt-2 w-48 bg-black bg-opacity-80 backdrop-blur-md rounded-md shadow-lg"
                  >
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-[#eeeeee] hover:bg-[#333]">
                        Submenu Item 1
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-[#eeeeee] hover:bg-[#333]">
                        Submenu Item 2
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-[#eeeeee] hover:bg-[#333]">
                        Submenu Item 3
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: 'auto', display: 'block' },
            closed: { opacity: 0, height: 0, transitionEnd: { display: 'none' } },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <div className="flex flex-col space-y-4">
            {placeholderData.navItems.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  href={item.href}
                  className="text-[#eeeeee] hover:text-[#979797] transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.hasSubmenu && <ChevronRight size={16} className="ml-2" />}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};