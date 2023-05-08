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
      <Playing/>
      <Footer/>
    </div>
  );
}

export default App;
