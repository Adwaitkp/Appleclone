import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Shop and Learn',
      links: [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Vision',
        'AirPods',
        'TV & Home',
        'AirTag',
        'Accessories',
        'Gift Cards'
      ]
    },
    {
      title: 'Apple Wallet',
      links: [
        'Wallet',
        'Apple Card',
        'Apple Pay',
        'Apple Cash'
      ]
    },
    {
      title: 'Account',
      links: [
        'Manage Your Apple ID',
        'Apple Store Account',
        'iCloud.com'
      ]
    },
    {
      title: 'Entertainment',
      links: [
        'Apple One',
        'Apple TV+',
        'Apple Music',
        'Apple Arcade',
        'Apple Fitness+',
        'Apple News+',
        'Apple Podcasts',
        'Apple Books',
        'App Store'
      ]
    },
    {
      title: 'Apple Store',
      links: [
        'Find a Store',
        'Genius Bar',
        'Today at Apple',
        'Apple Camp',
        'Apple Store App',
        'Refurbished and Clearance',
        'Financing',
        'Apple Trade In',
        'Order Status',
        'Shopping Help'
      ]
    },
    {
      title: 'For Business',
      links: [
        'Apple and Business',
        'Shop for Business'
      ]
    },
    {
      title: 'For Education',
      links: [
        'Apple and Education',
        'Shop for K-12',
        'Shop for College'
      ]
    },
    {
      title: 'For Healthcare',
      links: [
        'Apple in Healthcare',
        'Health on Apple Watch',
        'Health Records on iPhone'
      ]
    },
    {
      title: 'Apple Values',
      links: [
        'Accessibility',
        'Education',
        'Environment',
        'Inclusion and Diversity',
        'Privacy',
        'Racial Equity and Justice',
        'Supplier Responsibility'
      ]
    },
    {
      title: 'About Apple',
      links: [
        'Newsroom',
        'Apple Leadership',
        'Career Opportunities',
        'Investors',
        'Ethics & Compliance',
        'Events',
        'Contact Apple'
      ]
    }
  ];

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ color: '#007AFF' }}
                      className="text-sm hover:text-apple-blue transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-apple-blue hover:text-blue-400 transition-colors duration-200"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </motion.a>
              <span className="text-sm">Copyright © 2024 Apple Inc. All rights reserved.</span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: '#007AFF' }}
                className="hover:text-apple-blue transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#007AFF' }}
                className="hover:text-apple-blue transition-colors duration-200"
              >
                Terms of Use
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#007AFF' }}
                className="hover:text-apple-blue transition-colors duration-200"
              >
                Sales and Refunds
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#007AFF' }}
                className="hover:text-apple-blue transition-colors duration-200"
              >
                Legal
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#007AFF' }}
                className="hover:text-apple-blue transition-colors duration-200"
              >
                Site Map
              </motion.a>
            </div>
          </div>
        </div>

        {/* Country Selector */}
        <div className="text-sm">
          <motion.a
            href="#"
            whileHover={{ color: '#007AFF' }}
            className="hover:text-apple-blue transition-colors duration-200"
          >
            United States
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 