import React from 'react'

export default function Navbar() {
  return (
    //fixed navbar

    <nav style={styles.navbar}>
        <div style={styles.navbarItem} onClick={() => {window.location.href = "/"}}>Home</div>
        <div style={styles.navbarItem} onClick={() => {window.location.href = "/Skills"}}>Skills</div>
        <div style={styles.navbarItem} onClick={() => {window.location.href = "/Projects"}}>Projects</div>
        <div style={styles.navbarItem} onClick={() => {window.location.href = "/Contact"}}>Contact</div>
    </nav>
  )
}
const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '200px',
        // height: '100vh',
    },
    navbarItem: {
        //Navbar items
        padding: '20px',
        margin: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        cursor: 'pointer',

    }
}