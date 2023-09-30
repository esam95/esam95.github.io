import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  // const pathAfterHost = window.location.pathname;
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

  return (
    <nav id='navbar'>
        {/* <div id="homenav" className={`navbarItem${pathAfterHost === '/' ? ' active' : ''}`} onClick={() => {window.location.href = "/"}}>Hem</div>
        <div id="skillsnav" className={`navbarItem${pathAfterHost === '/skills' ? ' active' : ''}`} onClick={() => {window.location.href = "/skills"}}>Erfarenhet</div>
        <div id="projectsnav" className={`navbarItem${pathAfterHost === '/projects' ? ' active' : ''}`} onClick={() => {window.location.href = "/projects"}}>Projekt</div>
        <div id="contactnav"className={`navbarItem${pathAfterHost === '/contact' ? ' active' : ''}`}  onClick={() => {window.location.href = "/contact"}}>Kontakt</div> */}
        <ScrollLink to="top" smooth={true} duration={500} className={`navbarItem ${activeHome}`} onClick={()=> setActive('home')}>Hem</ScrollLink>
        <ScrollLink to="skills-container" smooth={true} duration={500} className={`navbarItem ${activeSkills}`} onClick={()=> setActive('skills')}>Erfarenhet</ScrollLink>
        <ScrollLink to="projects-container" smooth={true} duration={500} className={`navbarItem ${activeProjects}`} onClick={()=> setActive('projects')}>Projekt</ScrollLink>
        <ScrollLink to="contact-container" smooth={true} duration={500} className={`navbarItem ${activeContact}`} onClick={()=> setActive('contact')} id='contactnav'>Kontakt</ScrollLink>
    </nav>
  )
}
