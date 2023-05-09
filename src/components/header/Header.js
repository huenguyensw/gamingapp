import React, { useState } from 'react';

const Header = () => {
  const [gameMode, setGameMode] = useState('human-human');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [numPlays, setNumPlays] = useState('');

  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
  };

  const handlePlayer1NameChange = (event) => {
    setPlayer1Name(event.target.value);
  };

  const handlePlayer2NameChange = (event) => {
    setPlayer2Name(event.target.value);
  };

  const handleNumPlaysChange = (event) => {
    setNumPlays(event.target.value);
  };

  // Render player 2 name field based on game mode
  const player2NameField = gameMode === 'human-human' ? (
    <div>
      <label htmlFor="player2Name">
        Player 2 name:
        <input 
          type="text" 
          id="player2Name"
          value={player2Name} 
          onChange={handlePlayer2NameChange} 
          aria-label="Enter Player 2 Name"
        />
      </label>
    </div>
  ) : null;

  // Render header component
  return (
    <div>
<<<<<<< HEAD
      {/* display a title
      Game modes: two options: 1- human vs human and 2- human vs computer
      input fields: displays according to the chosen mode. it means that if user chooses option 1, two input fields are shown correspoinding to username 1 and 2. Similar to option 2, only one input field is shown to enter username
      number of plays (opional because it is not required) */}
=======
      <h1>Rock Paper Scissors</h1>
      {/* Render game mode selection */}
      <div>
        <label htmlFor="gameMode">
          Game mode:
          <select 
            id="gameMode"
            value={gameMode} 
            onChange={handleGameModeChange}
            aria-label="Select Game Mode"
          >
            <option value="human-human">Human vs Human</option>
            <option value="human-computer">Human vs Computer</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="player1Name">
          Player 1 name:
          <input 
            type="text" 
            id="player1Name"
            value={player1Name} 
            onChange={handlePlayer1NameChange} 
            aria-label="Enter Player 1 Name"
          />
        </label>
      </div>
      {/* Render player 2 name input (if game mode is human-human) */}
      {player2NameField}
      {/* Render number of plays input */}
      <div>
        <label htmlFor="numPlays">
          Number of plays:
          <input 
            type="text" 
            id="numPlays"
            value={numPlays} 
            onChange={handleNumPlaysChange} 
            aria-label="Enter Number of Plays"
          />
        </label>
      </div>
>>>>>>> 76f9a0a20e6dd07b72e08372d8a6f1370044ae3a
    </div>
  );
};

export default Header;

