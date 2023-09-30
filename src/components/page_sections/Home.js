import React from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
import { animateScroll as scroll } from 'react-scroll';

function Home() {
  const scrollDownByViewport = () => {
  const viewportHeight = window.innerHeight;
  const newScrollPosition = window.scrollY + viewportHeight;
  scroll.scrollTo(newScrollPosition, {
    duration: 500, // Duration for smooth scrolling (adjust as needed)
    spy: false, // Disable spy mode (not needed for this)
  })};

    return (
    <div id='top'>
      <h1>Hej, jag är Esam Ali Gelani.</h1>
      <h2>Jag är en frontend-utvecklare.</h2>
      {/* <img src="../images/Esam.jpeg" alt="" id="profile-image" /> */}
      <button onClick={scrollDownByViewport} id="view-work-button">Se mina projekt</button>
      <ScrollToTopButton />

    {/* <div id='skills-container'>
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
    <div id='projects-container'>
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

    <div id='contact-container'>
      <h1>Om du är intresserad av att kontakta mig för arbetsfrågor eller annat, tveka inte att nå ut till mig:</h1>
      <section id='icon-container'>
        <div className='contact-icon'>
          <a href="https://www.linkedin.com/in/esam-ali-gelani-181755177/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" style={{ color: '#0077B5', fontSize: '3em' }}></i>
          </a>
        </div>
        <div className='contact-icon'>
          <a href="https://github.com/esam95" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ color: '#211F1F', fontSize: '3em' }}></i>
          </a>
        </div>
        <div className='contact-icon'>
          <a href="mailto:esam_95@hotmail.se" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope" style={{ color: '#D44638', fontSize: '3em' }}></i>
          </a>
        </div>
        <div className='contact-icon'>
          <a href="tel:+46729214790" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone" style={{ color: '#075E54', fontSize: '3em' }}></i>
          </a>
        </div>
      </section>
    </div> */}

    </div>
  );
}

export default Home;