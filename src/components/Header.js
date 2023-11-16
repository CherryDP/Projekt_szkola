import React, { useState } from 'react';
import './Header.css'; // Stylizacja CSS
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [isKierunekOpen, setIsKierunekOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation(); // Get the current route location
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleKierunek = () => {
    setIsKierunekOpen(!isKierunekOpen);
  };

  const toggleSubject = () => {
    setIsSubjectOpen(!isSubjectOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubjectOpen(false);
    setIsKierunekOpen(false);
  };
  if (location.pathname === '/') {
  return (
    <header className="main-page">
      <div className="header">
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">Szukaj</button>
        </div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <ul>
            <ul onClick={toggleSubject}>Przedmioty Maturalne</ul>
            <ul className={`submenu ${isSubjectOpen ? 'open' : ''}`}>
               <Link to="/polski" className="Link" onClick={closeMenu}><li>J.Polski</li></Link>
               <Link to="/angielski" className="Link" onClick={closeMenu}><li>J.Angielski</li></Link>
               <Link to="/matematyka" className="Link" onClick={closeMenu}><li>Matematyka</li></Link>
               
            </ul>
          </ul>
          <ul>
            <ul onClick={toggleKierunek}>Kierunki Zawodowe</ul>
            <ul className={`submenu ${isKierunekOpen ? 'open' : ''}`}>
                <li>Technik Informatyk</li>
                <li>Technik Programista</li>
                <li>Technik Fotografii i multimediów</li>
                <li>Technik Reklamy</li>
                <li>Technik Grafiki i poligrafii cyfrowej</li>
                <li>Technik Logistyk</li>
                <li>Technik Mechatronik</li>
                <li>Technik Automatyk</li>
                <li>Technik Elektryk</li>
            </ul>
          </ul>
        </div>
      </nav>
    </header>
  );
}}

export default Header;


