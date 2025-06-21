import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = ({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  bgColor, 
  textColor, 
  reverse = false,
  small = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`relative ${small ? 'h-96' : 'h-screen'} ${bgColor} overflow-hidden`}>
      <div className={`absolute inset-0 ${bgColor}`}></div>
      
      <div className={`relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8`}>
        <div className={`max-w-7xl mx-auto w-full ${reverse ? 'flex-row-reverse' : 'flex'} flex-col lg:flex-row items-center gap-8 lg:gap-16`}>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex-1 text-center lg:text-left ${reverse ? 'lg:text-right' : ''}`}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${textColor} mb-4`}
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`text-xl md:text-2xl lg:text-3xl ${textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-6 font-light`}
            >
              {subtitle}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className={`text-lg md:text-xl ${textColor === 'text-white' ? 'text-apple-blue' : 'text-blue-600'} mb-8 font-medium`}
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-row gap-4 ${reverse ? 'justify-end' : 'justify-start'} items-center`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${textColor === 'text-white' ? 'bg-apple-blue text-white' : 'bg-blue-600 text-white'} px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity duration-200`}
              >
                Buy
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${textColor === 'text-white' ? 'text-apple-blue' : 'text-blue-600'} text-lg font-medium hover:opacity-80 transition-opacity duration-200 flex items-center`}
              >
                Learn more
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              animate={isHovered ? { scale: 1.05, rotateY: 5 } : { scale: 1, rotateY: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src={imageUrl}
                alt={title}
                className={`${small ? 'max-h-64' : 'max-h-96'} w-auto object-contain drop-shadow-2xl`}
              />
              
              {/* Glow Effect */}
              <motion.div
                animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className={`absolute top-20 left-20 w-32 h-32 ${textColor === 'text-white' ? 'bg-white/5' : 'bg-black/5'} rounded-full blur-xl`}></div>
        <div className={`absolute bottom-20 right-20 w-40 h-40 ${textColor === 'text-white' ? 'bg-apple-blue/10' : 'bg-blue-600/10'} rounded-full blur-xl`}></div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase; 