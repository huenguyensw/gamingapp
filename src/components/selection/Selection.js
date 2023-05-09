import React, { useRef, useState } from 'react'
import UserSelectionForm from '../userSelectionForm/UserSelectionForm'

const Selection = ({ gameMode, setGameMode, player1, player2,
   setResults, results, updatedResult, setUpdatedResult, 
   player1TotalScore,player2TotalScore, setPlayer1TotalScore, setPlayer2TotalScore  }) => {
  const [choiceOfPlay1, setChoiceOfPlay1] = useState(null); //save choice of play1
  const [choiceOfPlay2, setChoiceOfPlay2] = useState(null); //save choice of play2
  const [choiceOfComputer, setChoiceOfComputer] = useState(null); //save choice of play2
  // to handle if both players are chosen
  const choiced = useRef(0);
  const currentResult = useRef([]);
  const [winner, setWinner] = useState(null)

  const handlePlaying = () =>{
    setUpdatedResult(false);
    setChoiceOfPlay1(null);
    setChoiceOfPlay2(null);
    setChoiceOfComputer(null);
    setWinner(null);
  }

  const handleExitGame = () =>{
    setGameMode(2);
    setResults([]);
    setPlayer1TotalScore(null);
    setPlayer2TotalScore(null);
    setWinner(null);
    setUpdatedResult(false);
    setChoiceOfPlay1(null);
    setChoiceOfPlay2(null);
    setChoiceOfComputer(null);

  }
   return (
    <div className='selection'>
      <section >
        <p>Score: {player1TotalScore&&player1TotalScore} vs {player2TotalScore&&player2TotalScore} </p>
        <h2>{winner&& `${winner}`}</h2>
        {gameMode == 1
          ? (<div className='playing-container'>
            <UserSelectionForm gameMode={gameMode} playerName={player1} choiced={choiced} 
            choiceOfPlayer={choiceOfPlay1} setChoiceOfPlayer={setChoiceOfPlay1} results={results}
             setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult}
             currentResult={currentResult} setWinner={setWinner} />
            <UserSelectionForm gameMode={gameMode} playerName={player2} choiced={choiced} 
            choiceOfPlayer={choiceOfPlay2} setChoiceOfPlayer={setChoiceOfPlay2} results={results}
            setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} 
            currentResult={currentResult} setWinner={setWinner}/> </div>)
          : gameMode == 2? (<div className='playing-container'>
            <UserSelectionForm gameMode={gameMode} playerName={player1} choiced={choiced} 
            choiceOfPlayer={choiceOfPlay1} setChoiceOfPlayer={setChoiceOfPlay1} results={results}
             setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} currentResult={currentResult} setWinner={setWinner} />
            <UserSelectionForm gameMode={gameMode} playerName={'computer'} choiced={choiced} 
            choiceOfPlayer={choiceOfComputer} setChoiceOfPlayer={setChoiceOfComputer} results={results} setResults={setResults} 
            setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} currentResult={currentResult} setWinner={setWinner} /> </div>)
          : null
        }
      </section>
      {(updatedResult)
      &&<div className='buttons'>
        <button onClick={handlePlaying}>Play again</button>
        <button onClick={handleExitGame}>End game</button>
      </div>}

    </div>
  )
}

export default Selection
