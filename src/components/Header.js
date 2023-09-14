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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubjectOpen(false);
    setIsKierunekOpen(false);
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
              <li> <Link to="/polski" className="Link" onClick={closeMenu}>J.Polski</Link></li>
              <li> <Link to="/angielski" className="Link" onClick={closeMenu}>J.Angielski</Link></li>
              <li> <Link to="/niemiecki" className="Link" onClick={closeMenu}>J.Niemiecki</Link></li>
              <li> <Link to="/rosyjski" className="Link" onClick={closeMenu}>J.Rosyjski</Link></li>
              <li> <Link to="/hiszpanski" className="Link" onClick={closeMenu}>J.Hiszpański</Link></li>
              <li> <Link to="/matematyka" className="Link" onClick={closeMenu}>Matematyka</Link></li>
              <li> <Link to="/historia" className="Link" onClick={closeMenu}>Historia</Link></li>
              <li> <Link to="/geografia" className="Link" onClick={closeMenu}>Geografia</Link></li>
              <li> <Link to="/wf" className="Link" onClick={closeMenu}>Wf</Link></li>
              <li> <Link to="/plastyka" className="Link" onClick={closeMenu}>Plastyka</Link></li>
              <li> <Link to="/muzyka" className="Link" onClick={closeMenu}>Muzyka</Link></li>
              <li> <Link to="/wos" className="Link" onClick={closeMenu}>Wos</Link></li>
              <li> <Link to="/biologia" className="Link" onClick={closeMenu}>Biologia</Link></li>
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


