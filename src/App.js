import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Main from './components/main';
import { profile } from './components/portfolioData';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const menuButton = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0);
      document.getElementById('main-content').focus();
      previousPath.current = location.pathname;
    }
    const titles = { '/': 'Product Portfolio', '/projects': 'Selected Work', '/aboutMe': 'About', '/resume': 'Résumé', '/contact': 'Contact' };
    document.title = `${profile.name} | ${titles[location.pathname] || 'Page Not Found'}`;
  }, [location.pathname]);

  function closeOnEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuButton.current.focus();
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header" onKeyDown={closeOnEscape}>
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="Divyansh Chaudhary — home">
            <span className="brand-mark" aria-hidden="true">dc<span>.</span></span>
            <span className="brand-name">Divyansh Chaudhary<span>PRODUCT & DELIVERY</span></span>
          </Link>
          <button ref={menuButton} className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
          <nav id="primary-nav" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
            <NavLink exact to="/" activeClassName="active">Overview</NavLink>
            <NavLink to="/projects" activeClassName="active">Selected work</NavLink>
            <NavLink to="/aboutMe" activeClassName="active">About</NavLink>
            <NavLink to="/resume" activeClassName="active">Résumé</NavLink>
            <NavLink to="/contact" className="nav-contact" activeClassName="active">Let’s talk <span aria-hidden="true">↗</span></NavLink>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex="-1"><Main /></main>
      <footer className="site-footer container">
        <div><Link className="footer-name" to="/">Divyansh Chaudhary<span className="accent">.</span></Link><p>Thoughtful products. Measurable impact.</p></div>
        <div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span className="sr-only">(opens in a new tab)</span>↗</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(opens in a new tab)</span>↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div>
        <span className="footer-note">Based in Noida, India · © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
