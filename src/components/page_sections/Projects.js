import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const webbshopIcons = [
    <FaHtml5 key="html" size="1.5em" color="#E44D26" />,
    <FaCss3 key="css" size="1.5em" color="#2196F3" />,
    <FaJs key="js" size="1.5em" color="#F7DF1E" />,
    <FaReact key="react" size="1.5em" color="#61DAFB" />,
    <FaNodeJs size="1.5em" color="#339933" />
  ];

  const omdbIcons = [
    <FaHtml5 key="html" size="1.5em" color="#E44D26" />,
    <FaCss3 key="css" size="1.5em" color="#2196F3" />,
    <FaJs key="js" size="1.5em" color="#F7DF1E" />,
    <FaReact key="react" size="1.5em" color="#61DAFB" />,
  ];
  
  return (
    <div id='projects-container'>
      <h1>PROJEKT</h1>
      <section id='cardscontainer'>
        <ProjectCard 
          title="Webbshop" 
          description="Webbshop som hämtar data från datbas i Firestore. Har CRUD-funktionalitet för produkthantering, kundvagn och utcheckning." 
          imagelink="../images/webbshop-screenshot.JPG" 
          githublink="https://github.com/esam95/Webbshop-livs" 
          demolink="https://webbshop-livs.vercel.app/"
          icons={webbshopIcons}/>
        <ProjectCard 
          title="OMDB API" 
          description="Webbsida som hämtar data från omdbapi.com. Inkluderar sökfunktion där man kan välja filmer, serier, spel o.s.v." 
          imagelink="../images/omdb-api-screenshot.JPG" 
          githublink="https://github.com/esam95/omdb" 
          demolink="https://omdb-seven.vercel.app/"
          icons={omdbIcons}/>
      </section>
    </div>
  );
}