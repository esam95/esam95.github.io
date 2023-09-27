import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const webbshopIcons = [
    <FaHtml5 key="html" size="1em" color="#E44D26" />,
    <FaCss3 key="css" size="1em" color="#2196F3" />,
    <FaJs key="js" size="1em" color="#F7DF1E" />,
    <FaReact key="react" size="1em" color="#61DAFB" />,
    <FaNodeJs size="1em" color="#339933" />
  ];

  const omdbIcons = [
    <FaHtml5 key="html" size="1em" color="#E44D26" />,
    <FaCss3 key="css" size="1em" color="#2196F3" />,
    <FaJs key="js" size="1em" color="#F7DF1E" />,
    <FaReact key="react" size="1em" color="#61DAFB" />,
  ];
  
  return (
    <div>
      <h1>Utforska mina projekt nedan:</h1>
      <section id='cardscontainer'>
        <ProjectCard 
          title="Webbshop" 
          description="En webbshop som konsumerar data från livesatt API via Railway. Innehar CRUD för produkter, kundvagn och utcheckning." 
          imagelink="../images/webbshop-screenshot.JPG" 
          githublink="https://github.com/esam95/Webbshop-livs" 
          demolink="https://webbshop-livs.vercel.app/"
          icons={webbshopIcons}/>
        <ProjectCard 
          title="OMDB API" 
          description="Webbsida som hämtar data från omdbapi.com. Data visas genom sökfunktion där man kan välja filmer, serier, spel o.s.v." 
          imagelink="../images/omdb-api-screenshot.JPG" 
          githublink="https://github.com/esam95/omdb" 
          demolink="https://omdb-seven.vercel.app/"
          icons={omdbIcons}/>
      </section>
    </div>
  );
}