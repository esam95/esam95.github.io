import React from 'react'

export default function Contact() {
  return (
    <div>
      <h3>Om du är intresserad av att kontakta mig för arbetsfrågor eller annat, tveka inte att nå ut till mig:</h3>
      <a href="https://www.linkedin.com/in/esam-ali-gelani-181755177/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in" style={{ color: '#0077B5', fontSize: '3em' }}></i>
      </a>
      <a href="https://github.com/esam95" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" style={{ color: '#211F1F', fontSize: '3em' }}></i>
      </a>
      <a href="mailto:esam_95@hotmail.se" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope" style={{ color: '#D44638', fontSize: '3em' }}></i>
      </a>
      <a href="tel:+46729214790" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-phone" style={{ color: '#075E54', fontSize: '3em' }}></i>
      </a>
    </div>

  )
}