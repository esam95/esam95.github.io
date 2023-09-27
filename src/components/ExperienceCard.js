import React, { useState } from 'react';

export default function ExperienceCard({ title, date, description }) {
  const [isReversed, setIsReversed] = useState(false);

  const handleCardClick = () => {
    setIsReversed(!isReversed);
  };

  return (
    <div className={`card ${isReversed ? 'reversed' : ''}`} onClick={handleCardClick}>
      {isReversed ? 
        <div className="back">
          <p>{description}</p>
        </div>:
        <div className="front">
          <h2>{title}</h2>
          <h3>{date}</h3>
        </div>}
    </div>
  );
}
