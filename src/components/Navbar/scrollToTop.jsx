import React, { useState, useEffect } from 'react';
import '../Navbar/scrollToTop.css';
import { TiArrowUp } from 'react-icons/ti';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div className='scroll'>
        <button id='scrollToTop' onClick={scrollToTop}>
          <TiArrowUp />
        </button>
      </div>
    )
  );
}