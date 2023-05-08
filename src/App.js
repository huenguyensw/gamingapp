import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Selection from './components/selection/Selection';
import History from './components/history/History';


function App() {
  const [player1, setPlayer1] = useState(''); //show play1's name
  const [player2, setPlayer2] = useState(''); //show play1's name
  const [choiceOfPlay1, setChoiceOfPlay1] = useState(null); //save choice of play1
  const [choiceOfPlay2, setChoiceOfPlay2] = useState(null); //save choice of play2
  const [choiceOfComputer, setChoiceOfComputer] = useState(null); //save choice of play2
  return (
    <div className="App">
      <Header/>
      {gameMode===1?<Selection player1={player1} player2={player2} choiceOfPlay1={choiceOfPlay1} choiceOfPlay2={choiceOfPlay2}/>
      : gameMode===2? <Selection player1={player1} computer={'computer'} choiceOfPlay1={choiceOfPlay1} choiceOfComputer={choiceOfComputer}/>:null}
      <History results={results}/>
      <Footer/>
    </div>
  );
}

export default App;
