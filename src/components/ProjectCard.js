import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard ({ title, description, imagelink, githublink, demolink, icons }) {
  const [isReversed, setIsReversed] = useState(false);

  const handleCardClick = () => {
    setIsReversed(!isReversed);
  };

  return (
    <div className={`card ${isReversed ? 'reversed' : ''}`} onClick={handleCardClick}>
      {isReversed ? 
      <div className="back">
        <ul id='stack-list'>
        {icons.map((icon, index) => {
        return (
        <div key={index} className="stack-item">{icon}</div>
        )})}

        </ul>
        <p>{description}</p>
        <div id="project-links">
          <div className="project-link">
            <a href={githublink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ fontSize: '36px' }}></i>
            </a>
          </div>
          <div className="project-link">
            <Link to={demolink} className="read-more-link">Online demo</Link>
          </div>
        </div>
      </div>:
      <div className="front">
        <img className="projectImage" src={imagelink} alt={title}/>
          <h2>{title}</h2>
      </div>}
    </div>
    );
}
