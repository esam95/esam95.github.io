import React, { useState } from 'react';

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
          {icons.map(icon => {
          return (
          <div className="stack-item">
            {icon}
          </div>)})}
        </ul>
        <p>{description}</p>
        <a href={githublink} target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>            
        <a href={demolink} target="_blank" rel="noopener noreferrer">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>:
      <div className="front">
        <img className="projectImage" src={imagelink} alt={title}/>
          <h3>{title}</h3>
      </div>}
    </div>
    );
}
