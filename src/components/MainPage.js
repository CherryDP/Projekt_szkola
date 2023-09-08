import React, { useState } from 'react';
import './MainPage.css'; // Stylizacja CSS

function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [isZawodoweOpen, setIsZawodoweOpen] = useState(false);
  const [isOgolneOpen, setIsOgolneOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubject = () => {
    setIsSubjectOpen(!isSubjectOpen);
  };

  const toggleZawodowe = () => {
    setIsZawodoweOpen(!isZawodoweOpen);
  };

  const toggleOgolne = () => {
    setIsOgolneOpen(!isOgolneOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="main-page">
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
        <ul>
          <ul onClick={toggleSubject}>Przedmioty</ul>
          {isSubjectOpen && (
            <div>
              <ul onClick={toggleZawodowe}>Zawodowe</ul>
              {isZawodoweOpen && (
                <ul className="submenu">
                  <li>Przedmiot 1</li>
                  <li>Przedmiot 2</li>
                  <li>Przedmiot 3</li>
                </ul>
              )}
              <ul onClick={toggleOgolne}>Ogólne</ul>
              {isOgolneOpen && (
                <ul className="submenu">
                  <li>J.Polski</li>
                  <li>Matematyka</li>
                  <li>J.Angielski</li>
                  <li>J.Niemiecki</li>
                  <li>Historia</li>
                  <li>Geografia</li>
                  <li>Wf</li>
                  <li>Plastyka</li>
                  <li>Muzyka</li>
                </ul>
              )}
            </div>
          )}
        </ul>
      </nav>
      <div className="content">
        {/* Tutaj można umieścić treść strony */}
      </div>
    </div>
  );
}

export default MainPage;
