import React, { useState } from 'react';

const Header = ({player1, player2,setPlayer1,setPlayer2,setGameMode,gameMode}) => {
  
  // Event handlers for changing state variables
  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
    console.log(event.target.value)
  };
  const handlePlayer1NameChange = (event) => {
    setPlayer1(event.target.value);
  };
  const handlePlayer2NameChange = (event) => {
    setPlayer2(event.target.value);
  };
  

  // Render player 2 name field based on game mode
  const player2NameField = gameMode === '1' ? (
    <div>
      <label htmlFor="player2Name">
        Player 2 name:
        <input 
          type="text" 
          id="player2Name"
          value={player2} 
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
            <option value='1'>Human vs Human</option>
            <option value="2">Human vs Computer</option>
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
            value={player1} 
            onChange={handlePlayer1NameChange} 
            aria-label="Enter Player 1 Name"
          />
        </label>
      </div>
     {player2NameField}
    </div>
  );
};

export default Header;
