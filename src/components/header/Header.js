import React, { useState } from 'react';

const Header = () => {
  // Declare state variables for game mode, player names, and number of plays
  const [gameMode, setGameMode] = useState('human-human');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [numPlays, setNumPlays] = useState('');

  // Event handlers for changing state variables
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
      {/* Render player 1 name input */}
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
        {/* <label htmlFor="numPlays">
          Number of plays: */}
          {/* <input 
            type="text" 
            id="numPlays"
            value={numPlays} 
            onChange={handleNumPlaysChange} 
            aria-label="Enter Number of Plays"
          /> */}
        {/* </label> */}
      </div>
    </div>
  );
};

export default Header;
