import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Link to="top" smooth={true} duration={500} className="scroll-to-top">
        <FaArrowUp />
      </Link>
    )
  );
}
