import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Selection from './components/selection/Selection';
import History from './components/history/History';


function App() {
  const [gameMode, setGameMode] = useState(null); // 1 for human vs human, 2 for human vs computer
  const [player1, setPlayer1] = useState(''); //show play1's name
  const [player2, setPlayer2] = useState(''); //show play1's name
  const [choiceOfPlay1, setChoiceOfPlay1] = useState(null); //save choice of play1
  const [choiceOfPlay2, setChoiceOfPlay2] = useState(null); //save choice of play2
  const [choiceOfComputer, setChoiceOfComputer] = useState(null); //save choice of Computer

  return (
    <div className="App">
      <Header/>
      <Selection/>
      <History />
      <Footer/>
    </div>
  );
}

export default App;
