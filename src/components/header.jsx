// src/components/Header.jsx
import { useState } from 'react'
import logo from '../assets/TOUR-FOR-REAL_2.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className='header'>
        <img className='logo' src={logo} alt="Logo" />
        <button className='menu-toggle' onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </header>

      {/* SideMenu embutido */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className='close-btn' onClick={() => setMenuOpen(false)}>✕</button>
        <ul>
          <li><a href="#tours">TOURS</a></li>
          <li><a href="#sobre">SOBRE NÓS</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
      </nav>
    </>
  )
}
