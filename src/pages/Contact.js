import React from 'react'

export default function Contact() {
  return (
    <div>
      <h3>Om du är intresserad av att kontakta mig för arbetsfrågor eller annat, tveka inte att nå ut till mig:</h3>
      <div style={styles.contactItem}>
        <i class="fas fa-linkedin"></i>
        <a href="länk-till-Linkeind">LinkedIn</a>
      </div>
      <div style={styles.contactItem}>
        <i class="fab fa-github"></i>
        <a href="länk-till-Github">GitHub</a>
      </div>
      <div style={styles.contactItem}>
        <i class="fas fa-envelope"></i>
        <a href="mailto:din-email@example.com">Mail</a>
      </div>
      <div style={styles.contactItem}>
        <i class="fas fa-phone"></i>
        <a href="tel:telefonnummer">Telefon</a>
      </div>
    </div>

  )
}

const styles = {
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    }
  };
  