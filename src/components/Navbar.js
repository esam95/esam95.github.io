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
        <ScrollLink id="homenav" className={`navbarItem ${activeHome}`} onClick={()=> setActive('home')}>h</ScrollLink>
        <ScrollLink id="skillsnav" className={`navbarItem ${activeSkills}`} onClick={()=> setActive('skills')}>s</ScrollLink>
        <ScrollLink id="projectsnav" className={`navbarItem ${activeProjects}`} onClick={()=> setActive('projects')}>p</ScrollLink>
        <ScrollLink id="contactnav" className={`navbarItem ${activeContact}`} onClick={()=> setActive('contact')}>c</ScrollLink>
    </nav>
  )
}
