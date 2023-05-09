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

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <label htmlFor="gameMode">
          Select Game Mode:
        </label>
        <select 
          id="gameMode"
          value={gameMode} 
          onChange={handleGameModeChange}
          aria-label="Select Game Mode"
        >
          <option value="human-human">Human vs Human</option>
          <option value="human-computer">Human vs Computer</option>
        </select>
      </div>
      <div>
        <label htmlFor="player1Name">
          Enter Player 1 Name:
        </label>
        <input 
          type="text" 
          id="player1Name"
          value={player1Name} 
          onChange={handlePlayer1NameChange} 
          aria-label="Enter Player 1 Name"
        />
      </div>
      {gameMode === 'human-human' && (
        <div>
          <label htmlFor="player2Name">
            Enter Player 2 Name:
          </label>
          <input 
            type="text" 
            id="player2Name"
            value={player2Name} 
            onChange={handlePlayer2NameChange} 
            aria-label="Enter Player 2 Name"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
