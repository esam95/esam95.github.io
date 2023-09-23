import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.navbarcontainer}><Navbar /></div>
      <section style={styles.mainsectioncontainer}>
        <Outlet />
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
      flex: '1',
      border: '1px solid black',

  },
  mainsectioncontainer: {
      display: 'flex',
      flex: '3',
      marginLeft: '240px',
      marginRight: '0px',
      border: '1px solid black',

  },
}