import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger icon

export default function Navbar({isOpen, setIsOpen, windowWidth}) {
  /*Highlighting active vertical navbar item*/
  let activeHome = false;
  let activeSkills = false;
  let activeProjects = false;
  let activeContact = false;

  const[active, setActive] = useState('home');

  if(active === 'home') {
    activeHome = 'active';
    activeSkills = '';
    activeProjects = '';
    activeContact = ''
  } else if(active === 'skills'){
    activeHome = '';
    activeSkills = 'active';
    activeProjects = '';
    activeContact = ''
  } else if(active === 'projects'){
    activeHome = '';
    activeSkills = '';
    activeProjects = 'active';
    activeContact = ''
  } else if(active === 'contact'){
    activeHome = '';
    activeSkills = '';
    activeProjects = '';
    activeContact = 'active'
  }

  /*Toggling horizontal navbar*/
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{width: '100%'}}>
    {windowWidth <= 768 ?
    <nav id="hamburger-navbar">
        <div id="hamburger" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} size='3x'/>
        </div>
        {isOpen ? <div id={`nav-links`} onClick={toggleNavbar}>
          <ScrollLink to="top" smooth={true} duration={500}  onClick={toggleNavbar} >Hem</ScrollLink>
          <ScrollLink to="skills-container" smooth={true} duration={500} onClick={toggleNavbar}>Erfarenhet</ScrollLink>
          <ScrollLink to="projects-container" smooth={true} duration={500} onClick={toggleNavbar}>Projekt</ScrollLink>
          <ScrollLink to="contact-container" smooth={true} duration={500} onClick={toggleNavbar}>Kontakt</ScrollLink>
        </div>: null}
    </nav>: 
    <nav id='navbar'>
      <ScrollLink to="top" smooth={true} duration={500} className={`navbarItem ${activeHome}`} onClick={()=> setActive('home')}>Hem</ScrollLink>
      <ScrollLink to="skills-container" smooth={true} duration={500} className={`navbarItem ${activeSkills}`} onClick={()=> setActive('skills')}>Erfarenhet</ScrollLink>
      <ScrollLink to="projects-container" smooth={true} duration={500} className={`navbarItem ${activeProjects}`} onClick={()=> setActive('projects')}>Projekt</ScrollLink>
      <ScrollLink to="contact-container" smooth={true} duration={500} className={`navbarItem ${activeContact}`} onClick={()=> setActive('contact')} id='contactnav'>Kontakt</ScrollLink>
    </nav>
    }
    </div>
  )
}
