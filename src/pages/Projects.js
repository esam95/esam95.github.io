import React from 'react';

export default function Projects() {
  return (
    <div style={styles.container}>
      <p>Utforska mina projekt nedan:</p>
      <main style={styles.gallery}>
        <a href="https://webbshop-livs.vercel.app/" style={styles.projectItem}>
          <img src="/images/webbshop-screenshot.JPG" alt="Projekt 1" style={styles.projectImage} />
          <p>Projekt 1</p>
        </a>
        <a href="https://omdb-seven.vercel.app/" style={styles.projectItem}>
          <img src="/images/omdb-api-screenshot.JPG" alt="Projekt 2" style={styles.projectImage} />
          <p>Projekt 2</p>
        </a>
      </main>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '15px', // Add a gap between project items
  },
  projectItem: {
    width: 'calc(40% - 7.5px)', // Adjust width to fit two items per row with a 15px gap
    backgroundColor: '#FFF',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
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
    color: '#BF4F74',
  },
};
