import React from 'react';

function Home() {
  return (
    <div /* style={styles.container} */>
  <h1 style={styles.heading}>Hej, jag är Esam Ali Gelani</h1>
  <h2 style={styles.subHeading}>En driven frontend utvecklare</h2>
  <p style={styles.paragraph}>
    Välkommen till mitt portfolio, här kan du se min erfarenhet och projekt.
  </p>
</div>

  );
}

export default Home;

const styles = {
  container: {
    backgroundColor: '#F5F5F5', // Set the background color
    padding: '40px', // Add some padding to the container
    borderRadius: '10px', // Add rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    textAlign: 'center', // Center the content
  },
  heading: {
    fontSize: '36px', // Set the font size for the heading
    fontFamily: 'Arial, sans-serif', // Choose a font family
    fontWeight: 'bold', // Set font weight to bold
    color: '#333', // Set text color
  },
  subHeading: {
    fontSize: '24px', // Set the font size for the subheading
    fontFamily: 'Arial, sans-serif', // Choose a font family
    color: '#555', // Set text color
  },
  paragraph: {
    fontSize: '18px', // Set the font size for the paragraph
    fontFamily: 'Arial, sans-serif', // Choose a font family
    color: '#777', // Set text color
  },
};
