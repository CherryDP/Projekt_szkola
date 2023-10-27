import React, { useState } from 'react';
import './MainPage.css';

function MainPage() {
  // Dodaj stan do śledzenia, czy formularz rejestracji powinien być widoczny
  const [isRegistrationFormVisible, setRegistrationFormVisible] = useState(false);

  // Funkcja do przełączania między formularzem logowania a formularzem rejestracji
  const toggleRegistrationForm = () => {
    setRegistrationFormVisible(!isRegistrationFormVisible);
  };

  return (
    <div className="MainPage">
      <div className={`Login ${isRegistrationFormVisible ? 'hidden' : ''}`}>
        <br></br>
        <h1>Logowanie</h1>
        <form>
          {/* Tutaj umieść pola formularza logowania */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Hasło:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Zaloguj się</button>
        </form>
      </div>

      <div className={`Register ${isRegistrationFormVisible ? '' : 'hidden'}`}>
        <br></br>
        <h1>Rejestracja</h1>
        <form>
          {/* Tutaj umieść pola formularza rejestracji */}
          <div className="form-group">
            <label htmlFor="newEmail">Nowy Email:</label>
            <input type="email" id="newEmail" name="newEmail" />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nowe Hasło:</label>
            <input type="password" id="newPassword" name="newPassword" />
          </div>
          <button type="submit">Zarejestruj się</button>
        </form>
      </div>

      {/* Przycisk do przełączania między formularzami */}
      <button onClick={toggleRegistrationForm}>
        {isRegistrationFormVisible ? 'Powrót do logowania' : 'Rejestracja'}
      </button>

      
    </div>
  );
}

export default MainPage;