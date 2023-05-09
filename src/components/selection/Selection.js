import React, { useRef, useState } from 'react'
import UserSelectionForm from '../userSelectionForm/UserSelectionForm'

const Selection = ({ gameMode, setGameMode, player1, player2, setResults, results, updatedResult, setUpdatedResult }) => {
  const [choiceOfPlay1, setChoiceOfPlay1] = useState(null); //save choice of play1
  const [choiceOfPlay2, setChoiceOfPlay2] = useState(null); //save choice of play2
  const [choiceOfComputer, setChoiceOfComputer] = useState(null); //save choice of play2
  // to handle if both players are chosen
  const choiced = useRef(0);

  const handlePlaying = () =>{
    setUpdatedResult(false);
    setChoiceOfPlay1(null);
    setChoiceOfPlay2(null);
    setChoiceOfComputer(null);
  }

  const handleExitGame = () =>{
    setGameMode(null);
    setResults([])

  }

  return (
    <div className='selection'>

      
      <section >
        {gameMode == 1
          ? (<div className='playing-container'>
            <UserSelectionForm gameMode={gameMode} playerName={player1} choiced={choiced} choiceOfPlayer={choiceOfPlay1} setChoiceOfPlayer={setChoiceOfPlay1} results={results} setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} />
            <UserSelectionForm gameMode={gameMode} playerName={player2} choiced={choiced} choiceOfPlayer={choiceOfPlay2} setChoiceOfPlayer={setChoiceOfPlay2} results={results} setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} /> </div>)
          : gameMode == 2? (<div className='playing-container'>
            <UserSelectionForm gameMode={gameMode} playerName={player1} choiced={choiced} choiceOfPlayer={choiceOfPlay1} setChoiceOfPlayer={setChoiceOfPlay1} results={results} setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} />
            <UserSelectionForm gameMode={gameMode} playerName={'computer'} choiced={choiced} choiceOfPlayer={choiceOfComputer} setChoiceOfPlayer={setChoiceOfComputer} results={results} setResults={setResults} setUpdatedResult={setUpdatedResult} updatedResult={updatedResult} /> </div>)
          : null
        }
      </section>
      {(updatedResult && gameMode != null)
      &&<div className='buttons'>
        <button onClick={handlePlaying}>Play again</button>
        <button onClick={handleExitGame}>End game</button>
      </div>}

    </div>
  )
}

export default Selection
