import React from 'react'

export default function Contact() {
  return (
    <div /* style={styles.contactContainer} */>
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
    contactContainer: {
      backgroundColor: '#F5F5F5',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    i: {
      fontSize: '24px',
      marginRight: '10px',
      color: '#BF4F74', // Färgen på ikonen
    },
    a: {
      fontSize: '18px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      textDecoration: 'none',
      transition: 'color 0.2s ease-in-out',
    },
    'a:hover': {
      color: '#BF4F74', // Ändra textfärgen vid hover
    },
  };
  