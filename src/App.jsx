import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App min-h-screen bg-black">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <ProductShowcase 
          title="iPhone 15 Pro"
          subtitle="Titanium. So strong. So light. So Pro."
          description="From $999"
          imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          bgColor="bg-gray-900"
          textColor="text-white"
        />
        
        <ProductShowcase 
          title="iPhone 15"
          subtitle="New camera. New design. Newphoria."
          description="From $799"
          imageUrl="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          bgColor="bg-white"
          textColor="text-black"
          reverse
        />
        
        <ProductShowcase 
          title="MacBook Pro"
          subtitle="Supercharged by M3"
          description="From $1999"
          imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
          bgColor="bg-gray-900"
          textColor="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <ProductShowcase 
            title="iPad"
            subtitle="Lovable. Drawable. Magical."
            description="From $449"
            imageUrl="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
            bgColor="bg-white"
            textColor="text-black"
            small
          />
          
          <ProductShowcase 
            title="Apple Watch Series 9"
            subtitle="Smarter. Brighter. Mightier."
            description="From $399"
            imageUrl="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            bgColor="bg-black"
            textColor="text-white"
            small
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 