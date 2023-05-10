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
    <div className='footer'>
      {/* <button>Quit game</button> */}
      <hr/>
      <p> &#169; Hue, Liza, Nadya och Nikola	</p>
    </div>
  );
}

export default Footer;


