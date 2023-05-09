import React, { useState } from 'react';

function Footer() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleQuitGameButton = () => {
    setShowConfirmation(true);
  };

  const handleCancelQuitGameButton = () => {
    setShowConfirmation(false);
  };

  const handleConfirmQuitGameButton = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="footer">
      <p>© 2023 Rock Paper Scissors Game</p>
      <button onClick={handleQuitGameButton}>Quit game</button>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to end the game?</p>
          <button onClick={handleConfirmQuitGameButton}>Yes</button>
          <button onClick={handleCancelQuitGameButton}>No</button>
        </div>
      )}
    </div>
  );
}

export default Footer;


