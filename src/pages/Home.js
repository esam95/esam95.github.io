import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="home-container">
      <h1>Hej, jag är Esam Ali Gelani</h1>
      <h2>En driven frontend utvecklare</h2>
      <p>Välkommen till mitt portfolio, här kan du se min erfarenhet och projekt.</p>
      {/* <img src="../images/Esam.jpeg" alt="" id="profile-image" /> */}
      <Link to="/work" id="view-work-link">View My Work</Link>
    </div>
  );
}

export default Home;