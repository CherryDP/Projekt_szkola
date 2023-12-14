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
      <form>
      <section>
          <div className="signin">
            <div className="content">
              <h2>Sign In</h2>
              <div className="form">
                <div className="inputBox">
                  <input type="text" required /> <i>Username</i>
                </div>
                <div className="inputBox">
                  <input type="password" required /> <i>Password</i>
                </div>
                <div className="links">
                  <a href="#">Forgot Password</a> <a href="#" onClick={toggleRegistrationForm}>{isRegistrationFormVisible ? 'Sign in' : 'Sign up'}</a>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      </div>

      <div className={`Register ${isRegistrationFormVisible ? '' : 'hidden'}`}>
        <form>
        <section>
          <div className="signin">
            <div className="content">
              <h2>Sign up</h2>
              <div className="form">
                <div className="inputBox">
                  <input type="text" required /> <i>Username</i>
                </div>
                <div className="inputBox">
                  <input type="password" required /> <i>Password</i>
                </div>
                <div className="links">
                  <a href="#" onClick={toggleRegistrationForm}>{isRegistrationFormVisible ? 'Sign in' : 'Sign up'}</a>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Register" />
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Przycisk do przełączania między formularzami */}
      <button >
        {isRegistrationFormVisible ? 'Powrót do logowania' : 'Rejestracja'}
      </button>
      </form>
      </div>
      </div>
  );
}

export default MainPage;