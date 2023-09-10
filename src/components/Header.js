import React, { useState } from 'react';
import './Header.css'; // Stylizacja CSS
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [isKierunekOpen, setIsKierunekOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
            <ul onClick={toggleSubject}>Przedmioty</ul>
            <ul className={`submenu ${isSubjectOpen ? 'open' : ''}`}>
            <li> J.Polski</li>
              <li>J.Angielski</li>
              <li>J.Niemiecki</li>
              <li>J.Rosyjski</li>
              <li>J.Hiszpański</li>
              <li>Matematyka</li>
              <li>Historia</li>
              <li>Geografia</li>
              <li>Wf</li>
              <li>Plastyka</li>
              <li>Muzyka</li>
              <li>Wos</li>
              <li>Biologia</li>
            </ul>
          </ul>
          <ul>
            <ul onClick={toggleKierunek}>Kierunki</ul>
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
}

export default Header;


