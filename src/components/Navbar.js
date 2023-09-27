import React from 'react'

export default function Navbar() {
  const pathAfterHost = window.location.pathname;

  return (
    <nav style={styles.navbar}>
        <div id="homenav" className={`navbarItem${pathAfterHost === '/' ? ' active' : ''}`} onClick={() => {window.location.href = "/"}}>Hem</div>
        <div id="skillsnav" className={`navbarItem${pathAfterHost === '/skills' ? ' active' : ''}`} onClick={() => {window.location.href = "/skills"}}>Erfarenhet</div>
        <div id="projectsnav" className={`navbarItem${pathAfterHost === '/projects' ? ' active' : ''}`} onClick={() => {window.location.href = "/projects"}}>Projekt</div>
        <div id="contactnav"className={`navbarItem${pathAfterHost === '/contact' ? ' active' : ''}`}  onClick={() => {window.location.href = "/contact"}}>Kontakt</div>
    </nav>
  )
}
const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '200px',
      },
  }
