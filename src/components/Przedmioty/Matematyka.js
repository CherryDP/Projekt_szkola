import './Matematyka.css'; 
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
function Matematyka() {
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
          <h2>Wzory</h2>
        </div>
      </div>
    </>
  );
}

export default Matematyka;