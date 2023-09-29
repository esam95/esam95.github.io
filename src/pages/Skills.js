import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaMobileAlt, FaNodeJs } from 'react-icons/fa';
import ExperienceCard from '../components/ExperienceCard';

export default function Skills() {

  return (
    <div id='skills-container'>
      <section>
        <h2>Under min 2-åriga utbildning på Jensen har jag blivit skicklig på de viktigaste frontend-verktygen.</h2>
        <div id="skill-list">
          <div className="skill-icon"><FaHtml5 size="3em" color="#E44D26" /> <p>HTML</p></div>
          <div className="skill-icon"><FaCss3 size="3em" color="#2196F3" /> <p>CSS</p></div>
          <div className="skill-icon"><FaJs size="3em" color="#F7DF1E" /> <p>Javascript</p></div>
          <div className="skill-icon"><FaReact size="3em" color="#61DAFB" /> <p>React.js</p></div>
          <div className="skill-icon"><FaMobileAlt size="3em" color="#4CAF50" /> <p>React Native</p></div>
          <div className="skill-icon"><FaNodeJs size="3em" color="#339933" /> <p>Node.js</p></div>
        </div>
      </section>

      <h2>Min nuvarande anställning och tidigare utbildning är:</h2>
      <section id='cardscontainer'>
        <ExperienceCard title="Frontendutvecklare, Jensen YH" date="2022-pågående" description="Har lärt mig de viktigaste frontendverktygen, gjort flertalet projekt i grupp med versionhantering i github."/>
        <ExperienceCard title="Byggkalkylator, Folkbro AB" date="2021-pågående" description="Tar fram kostnadskalkyler för byggprojekt. Smarbetarar med olika avdelningar i byggbranschen."/>
        <ExperienceCard title="IT-ansvarig, Folksval AB" date="2021-pågående" description="Delaktig i framtagning och utveckling av webbshop via Wordpress. Sköter produkthantering, UI, styling, lagersaldo mm. Hanterar även kund- och leverantör kontakt."/>
        <ExperienceCard title="Byggteknik och design, KTH" date="2016-2019" description="Högskoleutbildning i byggteknik med inriktning i konstruktion"/>
      </section>
    </div>
  );
}
