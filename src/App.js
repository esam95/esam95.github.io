import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
//   const experience = [
//     {title: 'Byggkalkylator på Folkbro AB', date: '2021-pågående', description: 'Lorem ipsum dolor'}, 
//     {title: 'IT-ansvarig på Folksval AB', date: '2021-pågående', description: 'Lorem ipsum dolor'}
// ];

  return (
    <div style={styles.container}>
      <div style={styles.navbarcontainer}><Navbar /></div>
      <section style={styles.mainsectioncontainer}>
        <Outlet/>
      </section>
    </div>
  );
}

export default App;

const styles = {
  container: {
      display: 'flex',
      alignItems: 'stretch',
  },
  navbarcontainer: {
      //Fixed vertical navbar
      position: 'fixed',
      display: 'flex',
      flex: '0', 
      width: '200px',// Set a fixed width for the sidebar
      border: '1px solid black',
      top: '0',
      left: '0',
      height: '100vh',
      
  },
  mainsectioncontainer: {
      display: 'flex',
      flex: '1', // Let it grow to fill the remaining space
      marginLeft: '200px', // Ensure it's positioned to the right of the sidebar
      padding: '20px',
      border: '1px solid black',
    //center the content vertically and horizontally 
      alignItems: 'center',
      justifyContent: 'center',

  },
}