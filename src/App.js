import React, { useState, useEffect } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  
  /*Horizontal navbar popping up when scrolling down from home sextion*/
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY >= window.innerHeight-1) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        // If viewport width is greater than 768px, always show the navbar
        setShowNavbar(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNavbar]);

  const navbarStyle = {
    top: showNavbar ? '0' : '-100px',
  };

  /*Toggling horizontal navbar*/
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    if(isOpen === true) {
      setIsOpen(false);
    }else {
      return null;
    }
  }

  return (
    <div id='container' onClick={toggleNavbar}>
      {showNavbar && <div id='navbar-container' style={navbarStyle}><Navbar isOpen={isOpen} setIsOpen={setIsOpen}/></div>}
      <section id='mainsection-container'><MainPage /></section>
    </div>
  );
}

export default App;