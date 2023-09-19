import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
`;

function Home() {
  return (
    <StyledComponent>
      <h1>My name is Esam Gelani</h1>
      <h2>An aspiring frontend developer</h2>
      <p>Welcome to my portfolio, where i will showcase my experience and my work.</p>

        <h3>During my 2 year education att JEnsen, I have become adept at the most important frontend languages.</h3>
        <div>HTML</div>
        <div>CSS</div>
        <div>Javascript</div>
        <div>React.js</div>
        <div>React Native</div>
        <div>Wordpress</div>

        <h3>My current job and previous education is:</h3>
        <div>Byggteknik och design, KTH. 2016-2019</div>
        <div>Byggkalkylator på folkbro AB 2021-pågående</div>
        <div>IT-ansvarig på Folksval AB 2021-pågående</div>



      <p>Check out my projects below:</p>
      <main style={styles.projects}>
        <div style={styles.project}>Project 1</div>
        <div style={styles.project}>Project 2</div>
      </main>

      <h3>OM du är intresserad av att kontakta mig för arbetsfrågor eller annat, tveka inte att nå ut till mig:</h3>
      <div>Linkeind</div>
      <div>Github</div>
      <div>Mail</div>
      <div>Telefon</div>

    </StyledComponent>
  );
}

export default Home;

const styles = {
    projects: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    project: {
        backgroundColor: '#00bcd4', 
        color: '#ffffff',
        padding: '20px',
        margin: '20px',
        borderRadius: '5px',
    }
}