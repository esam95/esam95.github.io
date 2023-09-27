import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <h1>Utforska mina projekt nedan:</h1>
      <section id='cardscontainer'>
        <ProjectCard title="Webbshop" description="En webbshop gjord via React.js som konsumerar data från livesatt API via Railway. Innehar CRUD för produkter, kundvagn och utcheckning, " imagelink="../images/webbshop-screenshot.JPG" githublink="https://github.com/esam95/Webbshop-livs" demolink="https://webbshop-livs.vercel.app/"/>
        <ProjectCard title="OMDB API" description="Webbsida som hämtar data från omdbapi.com. Data visas genom sökfunktion där man kan välja filmer, serier, spel o.s.v." imagelink="../images/omdb-api-screenshot.JPG" githublink="https://github.com/esam95/omdb" demolink="https://omdb-seven.vercel.app/"/>
      </section>
    </div>
  );
}