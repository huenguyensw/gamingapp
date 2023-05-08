import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Playing from './components/playing/Playing';

function App() {
  const [player1, setPlayer1] = useState(''); //show play1's name
  const [player2, setPlayer2] = useState(''); //show play1's name
  const [choiceOfPlay1, setChoiceOfPlay1] = useState(null); //save choice of play1
  const [choiceOfPlay2, setChoiceOfPlay2] = useState(null); //save choice of play2
  const [choiceOfComputer, setChoiceOfComputer] = useState(null); //save choice of play2
  return (
    <div className="App">
      <Header/>
<<<<<<< HEAD
      {gameMode===1?<Selection player1={player1} player2={player2} choiceOfPlay1={choiceOfPlay1} choiceOfPlay2={choiceOfPlay2}/>
      : gameMode===2? <Selection player1={player1} computer={'computer'} choiceOfPlay1={choiceOfPlay1} choiceOfComputer={choiceOfComputer}/>:null}
      <History results={results}/>
=======
      <Playing/>
>>>>>>> 76f9a0a20e6dd07b72e08372d8a6f1370044ae3a
      <Footer/>
    </div>
  );
}

export default App;
