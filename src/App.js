import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Selection from './components/selection/Selection';
import History from './components/history/History';


function App() {
  const [gameMode, setGameMode] = useState(1); // 1 for human vs human, 2 for human vs computer
  const [player1, setPlayer1] = useState(''); //show play1's name
  const [player2, setPlayer2] = useState(''); //show play1's name
  const [choiceOfPlay1, setChoiceOfPlay1] = useState(null); //save choice of play1
  const [choiceOfPlay2, setChoiceOfPlay2] = useState(null); //save choice of play2
  const [choiceOfComputer, setChoiceOfComputer] = useState(null); //save choice of Computer
  const fakeResults = [
    {play1: {choice: 0}, play2: {choice: 1}}, {play1: {choice: 1}, play2: {choice: 0}}, 
  ]
    
  const [results, setResults] = useState(fakeResults); //
  

  return (
    <div className="App">
      <Header/>
      <Selection/>
     {gameMode == 1? <History player1={player1} player2={player2} results={results}/>: gameMode== 2&& < History player1={player1} player2 = {"Computer"} results ={results} />}
      <Footer/>
    </div>
  );
}

export default App;
