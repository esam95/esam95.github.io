import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
`;

function ExampleComponent() {
  return (
    <StyledComponent>
      <h1>Esam Gelani</h1>
      <h2>An aspiring frontend developer</h2>
      <p>Check out my projects below:</p>
      <main style={styles.projects}>
        <div style={styles.project}>Project 1</div>
        <div style={styles.project}>Project 2</div>
      </main>
    </StyledComponent>
  );
}

export default ExampleComponent;

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