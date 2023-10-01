import React from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
import { animateScroll as scroll } from 'react-scroll';

function Home() {
  const scrollDownByViewport = () => {
  const viewportHeight = window.innerHeight;
  const newScrollPosition = window.scrollY + viewportHeight;
  scroll.scrollTo(newScrollPosition, {
    duration: 500, 
    spy: false, 
  })};

    return (
    <div id='top'>
      <h1>Hej, jag är Esam Ali Gelani.</h1>
      <h2>Jag är en frontend-utvecklare.</h2>
      {/* <img src="../images/Esam.jpeg" alt="" id="profile-image" /> */}
      <button onClick={scrollDownByViewport} id="view-work-button">Se mina projekt</button>
      <ScrollToTopButton />
    </div>
  );
}

export default Home;