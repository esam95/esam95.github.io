import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaHtml5, FaCss3, FaJs, FaReact, FaMobileAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si'; // This is for the TypeScript icon
import ExperienceCard from '../ExperienceCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Skills({ windowWidth }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
  };
  console.log(windowWidth)
  
  return (
    <div id='skills-container'>
      <section>
        <h1>OM MIG</h1>
        <h2>Under min 2-åriga utbildning på Jensen har jag blivit skicklig på de viktigaste frontend-verktygen:</h2>
        <div id="skill-list">
          <div className="skill-icon"><FaHtml5 size="3em" color="#E44D26" /> <h5>HTML</h5></div>
          <div className="skill-icon"><FaCss3 size="3em" color="#2196F3" /> <h5>CSS</h5></div>
          <div className="skill-icon"><FaJs size="3em" color="#F7DF1E" /> <h5>Javascript</h5></div>
          <div className="skill-icon"><SiTypescript size="3em" color="#3178C6" /><h5>TypeScript</h5></div>
          <div className="skill-icon"><SiNextdotjs size="3em" color="#3178C6" /><h5>Next.js</h5></div>
          <div className="skill-icon"><FaReact size="3em" color="#61DAFB" /> <h5>React.js</h5></div>
          <div className="skill-icon"><FaMobileAlt size="3em" color="#4CAF50" /> <h5>React Native</h5></div>
          <div className="skill-icon"><FaNodeJs size="3em" color="#339933" /> <h5>Node.js</h5></div>
          <div className="skill-icon"><FontAwesomeIcon icon={faGit} size="3x" /> <h5>Git</h5></div>
          <div className="skill-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" style={{ width: '3em', height: '3em' }} />
            <h5>Tailwind CSS</h5>
          </div>
        </div>
      </section>

      <h2>Min nuvarande anställning och tidigare utbildning är:</h2>
      <section id='slider-container'>
        <Slider style={{ maxWidth: windowWidth <= 768 ? '80vw': 'calc(100vw - 400px)'}} {...settings}>
          <ExperienceCard 
            title="LIA, Hitract AB" 
            date="2023/11-2023/05" 
            description="En givande LIA-period där jag skapade admin-sidan för en e-butik med Next.js och TypeScript. Förvärvade färdigheter i React Hook Forms och React Query."/>
          <ExperienceCard 
            title="Frontendutvecklare, Jensen YH" 
            date="2022-pågående" 
            description="Har lärt mig de viktigaste frontendverktygen samt gjort flertalet projekt i grupp med versionhantering i github."/>
          <ExperienceCard 
            title="Byggkalkylator, Folkbro AB" 
            date="2021-pågående" 
            description="Tar fram kostnadskalkyler för byggprojekt i samarbete med olika aktörer inom byggbranschen."/>
          <ExperienceCard 
            title="IT-ansvarig, Folksval AB" 
            date="2021-pågående" 
            description="Delaktig i framtagning och utveckling av webbshop via Wordpress. Sköter produkthantering, UI, styling, lagersaldo mm. Hanterar även kund- och leverantör kontakt."/>
          <ExperienceCard 
            title="Byggteknik och design, KTH" 
            date="2016-2019" 
            description="Högskoleutbildning i byggteknik med inriktning i konstruktion"/>
        </Slider>
      </section>
    </div>
  );
}
