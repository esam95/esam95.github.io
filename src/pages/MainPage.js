import React from 'react'
import Home from '../components/page_sections/Home';
import Skills from '../components/page_sections/Skills';
import Projects from '../components/page_sections/Projects';
import Contact from '../components/page_sections/Contact';

export default function MainPage({ windowWidth }) {
  return (
    <div style={{ width: '100%' }}>
        <Home />
        <Skills windowWidth={windowWidth}/>
        <Projects />
        <Contact />
    </div>
  )
}
