import './Polski.css'; 
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
function Polski() {
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
          <h2>Książki</h2>
        </div>
        <div className="oscillating-tile">
          <h2>Lektury</h2>
        </div>
        <div className="oscillating-tile">
          <h2>Numerek</h2>
        </div>
      </div>
    </>
  );
}

export default Polski;