import React from 'react'

export default function Navbar() {
  return (
    //fixed navbar

    <nav style={styles.navbar}>
        <div style={styles.navbarItem}>Home</div>
        <div style={styles.navbarItem}>About</div>
        <div style={styles.navbarItem}>Projects</div>
        <div style={styles.navbarItem}>Contact</div>
    </nav>
  )
}
const styles = {
    navbar: {
        //Fixed vertical navbar
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#121212',
        color: '#ffffff',
        padding: '20px',
        width: '200px',
        height: '100vh',
    },
    navbarItem: {
        //Navbar items
        padding: '20px',
        margin: '20px',
        borderRadius: '5px',
        cursor: 'pointer',

    }
}