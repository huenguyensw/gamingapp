import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Selection from './components/selection/Selection'
import History from './components/history/History';



function App() {
  const [gameMode, setGameMode] = useState(2); // 1 for human vs human, 2 for human vs computer
  const [player1, setPlayer1] = useState('userA'); //show play1's name
  const [player2, setPlayer2] = useState('userB'); //show play1's name
  const [updatedResult, setUpdatedResult] = useState(false);
  const [player1TotalScore, setPlayer1TotalScore] = useState(null);
  const [player2TotalScore, setPlayer2TotalScore] = useState(null);
  
  const [results, setResults] = useState({});
  
 

  return (
    <div className="App">
      <Header player1={player1} player2={player2}  gameMode={gameMode} setGameMode={setGameMode} 
      setPlayer1={setPlayer1} setPlayer2={setPlayer2} updatedResult={updatedResult}/>
      <h1 className='sub-title'> Let's play the game </h1>
      
      <Selection player1={player1} player2={player2}  gameMode={gameMode} setGameMode={setGameMode} 
      setResults={setResults} results={results} updatedResult={updatedResult} setUpdatedResult={setUpdatedResult}
       player1TotalScore={player1TotalScore} player2TotalScore={player2TotalScore} 
       setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore}/>

      <History results={results} updatedResult={updatedResult} setUpdatedResult={setUpdatedResult} 
      player1TotalScore={player1TotalScore} setPlayer1TotalScore={setPlayer1TotalScore} 
      setPlayer2TotalScore={setPlayer2TotalScore} player2TotalScore={player2TotalScore} />
      <Footer/>
    </div>
  );
}

export default App;
