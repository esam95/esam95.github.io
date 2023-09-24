import React from 'react'

export default function Navbar() {
  const pathAfterHost = window.location.pathname;

  return (
    <nav style={styles.navbar}>
        <div id={'home'} className={`navbarItem${pathAfterHost === '/' ? ' active' : ''}`} onClick={() => {window.location.href = "/"}}>Home</div>
        <div className={`navbarItem${pathAfterHost === '/skills' ? ' active' : ''}`} onClick={() => {window.location.href = "/skills"}}>Skills</div>
        <div className={`navbarItem${pathAfterHost === '/projects' ? ' active' : ''}`} onClick={() => {window.location.href = "/projects"}}>Projects</div>
        <div className={`navbarItem${pathAfterHost === '/contact' ? ' active' : ''}`}  onClick={() => {window.location.href = "/contact"}}>Contact</div>
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
