import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Selection from './components/selection/Selection'
import History from './components/history/History';



function App() {
  const [gameMode, setGameMode] = useState(2); // 1 for human vs human, 2 for human vs computer
  const [player1, setPlayer1] = useState('Hanna'); //show play1's name
  const [player2, setPlayer2] = useState('Maria'); //show play1's name
  const [updatedResult, setUpdatedResult] = useState(false);
  const [results, setResults] = useState({});
  
 

  return (
    <div className="App">
      <Header />
      <h1 className='sub-title'> Let's play the game </h1>
      <Selection player1={player1} player2={player2}  gameMode={gameMode} setGameMode={setGameMode} setResults={setResults} results={results} updatedResult={updatedResult} setUpdatedResult={setUpdatedResult}/>
      <History results={results} updatedResult={updatedResult} setUpdatedResult={setUpdatedResult}/>
      <Footer/>
    </div>
  );
}

export default App;
