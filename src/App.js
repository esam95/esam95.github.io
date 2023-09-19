import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.navbarcontainer}><Navbar /></div>
      <div style={styles.mainpagecontainer}><Home /></div>
    </div>
  );
}

export default App;

const styles = {
  container: {
      display: 'flex',
      alignItems: 'center',
  },
  navbarcontainer: {
      //Fixed vertical navbar
      position: 'fixed',
      display: 'flex',
      flex: '1',
  },
  mainpagecontainer: {
      //Fixed vertical navbar
      display: 'flex',
      flex: '3',
      height: '100vh',
      marginLeft: '240px',
      marginRight: '0px',
  },
}