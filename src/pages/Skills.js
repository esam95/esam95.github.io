import React from 'react'

export default function Skills() {
  return (
    <div style={styles.container}>
  <h2 style={styles.heading}>Under min 2-åriga utbildning på Jensen har jag blivit skicklig på de viktigaste frontend-språken.</h2>
  <ul style={styles.skillList}>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>React.js</li>
    <li>React Native</li>
    <li>Wordpress</li>
  </ul>

  <h2 style={styles.heading}>Min nuvarande anställning och tidigare utbildning är:</h2>
  <ul style={styles.experienceList}>
    <li>Byggteknik och design, KTH. 2016-2019</li>
    <li>Byggkalkylator på Folkbro AB 2021-pågående</li>
    <li>IT-ansvarig på Folksval AB 2021-pågående</li>
  </ul>
</div>

  )
}


const styles = {
    container: {
      backgroundColor: '#F5F5F5', // Set the background color
      padding: '40px', // Add some padding to the container
      borderRadius: '10px', // Add rounded corners
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
      textAlign: 'left', // Align text to the left
    },
    heading: {
      fontSize: '24px', // Set the font size for headings
      fontFamily: 'Arial, sans-serif', // Choose a font family
      fontWeight: 'bold', // Set font weight to bold
      color: '#333', // Set text color
      marginBottom: '16px', // Add spacing below headings
    },
    skillList: {
      listStyleType: 'none', // Remove bullet points for lists
      paddingLeft: '0', // Remove default list padding
    },
    experienceList: {
      listStyleType: 'none', // Remove bullet points for lists
      paddingLeft: '0', // Remove default list padding
    },
    li: {
      fontSize: '18px', // Set the font size for list items
      fontFamily: 'Arial, sans-serif', // Choose a font family
      color: '#555', // Set text color
      marginBottom: '8px', // Add spacing between list items
    },
  };
  