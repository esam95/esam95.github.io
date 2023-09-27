import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaMobileAlt, FaNodeJs } from 'react-icons/fa';
import ExperienceCard from '../components/ExperienceCard';

export default function Skills() {

  return (
    <div className='container'>
      <section>
        <h2 className="heading">Under min 2-åriga utbildning på Jensen har jag blivit skicklig på de viktigaste frontend-verktygen.</h2>
        <ul className="skillList">
          <li className="icon-item"><FaHtml5 size="3em" color="#E44D26" /> <span>HTML</span></li>
          <li className="icon-item"><FaCss3 size="3em" color="#2196F3" /> <span>CSS</span></li>
          <li className="icon-item"><FaJs size="3em" color="#F7DF1E" /> <span>Javascript</span></li>
          <li className="icon-item"><FaReact size="3em" color="#61DAFB" /> <span>React.js</span></li>
          <li className="icon-item"><FaMobileAlt size="3em" color="#4CAF50" /> <span>React Native</span></li>
          <li className="icon-item"><FaNodeJs size="3em" color="#339933" /> <span>Node.js</span></li>
        </ul>
      </section>

      <h2 className="heading">Min nuvarande anställning och tidigare utbildning är:</h2>
      <section id='cardscontainer'>
        <ExperienceCard title="Frontendutvecklare, Jensen YH" date="2022-pågående" description="Har lärt mig de viktigaste frontendverktygen, gjort flertalet projekt i grupp med versionhantering i github."/>
        <ExperienceCard title="Byggkalkylator, Folkbro AB" date="2021-pågående" description="Tar fram kostnadskalkyler för byggprojekt. Smarbetarar med olika avdelningar i byggbranschen."/>
        <ExperienceCard title="IT-ansvarig, Folksval AB" date="2021-pågående" description="Delaktig i framtagning och utveckling av webbshop via Wordpress. Sköter produkthantering, UI, styling, lagersaldo mm. Hanterar även kund- och leverantör kontakt."/>
        <ExperienceCard title="Byggteknik och design, KTH" date="2016-2019" description="Högskoleutbildning i byggteknik med inriktning i konstruktion"/>
      </section>

    </div>
  );
}
