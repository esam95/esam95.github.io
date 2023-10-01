import React, { useState, useEffect } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';

function App() {
 /*Changing navbar based on vp width*/
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 const handleResize = () => {
   setWindowWidth(window.innerWidth);
 };

 useEffect(() => {
   window.addEventListener('resize', handleResize);

   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);

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
      {windowWidth <= 768 && showNavbar === true ? <div id='navbar-container' style={navbarStyle}><Navbar isOpen={isOpen} setIsOpen={setIsOpen} windowWidth={windowWidth}/></div> : null}
      {windowWidth > 768 ? <div id='navbar-container'><Navbar windowWidth={windowWidth}/></div> : null}
      <section id='mainsection-container'><MainPage /></section>
    </div>
  );
}

export default App;