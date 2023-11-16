import './Angielski.css'; 
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
function Angielski() {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/'); // Redirect to the main page
  };

  return (
    <>
      <div className="back-button" onClick={handleBackButtonClick}>
      <FaArrowLeft  className="arrow-icon" />
      </div>

      <div className="oscillating-container">
        <div className="oscillating-tile">
          <h2>Poziom Podstawowy</h2>
        </div>
        <div className="oscillating-tile">
          <h2>Poziom Rozszerzony</h2>
        </div>
        <div className="oscillating-tile">
          <h2>Czasy</h2>
        </div>
      </div>
    </>
  );
}

export default Angielski;