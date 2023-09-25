import React from 'react'

export default function Projects() {
  return (
    <div style={styles.container}>
  <p>Utforska mina projekt nedan:</p>
  <main style={styles.gallery}>
    <a href="https://webbshop-livs.vercel.app/">
      <div style={styles.projectItem}>
        <img src="/images/webbshop-screenshot.JPG" alt="Projekt 1" style={styles.projectImage} />
        <p>Projekt 1</p>
      </div>
    </a>
    <a href="https://omdb-seven.vercel.app/">
      <div style={styles.projectItem}>
        <img src="/images/omdb-api-screenshot.JPG" alt="Projekt 2" style={styles.projectImage} />
        <p>Projekt 2</p>
      </div>
    </a>
  </main>
</div>

  )
}

const styles = {
    container: {
      backgroundColor: '#F5F5F5',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    gallery: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    projectItem: {
      width: '45%', // Justera bredden beroende på hur många projekt du har per rad
      backgroundColor: '#FFF',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      transition: 'transform 0.2s ease-in-out',
    },
    projectImage: {
      maxWidth: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
    p: {
      fontSize: '18px',
      fontFamily: 'Arial, sans-serif',
      color: '#555',
      marginBottom: '8px',
    },
    a: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
      transition: 'color 0.2s ease-in-out',
    },
    'a:hover': {
      color: '#BF4F74', // Ändra textfärgen vid hover
    },
  };
  