import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper, faHandRock } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';




const UserSelectionForm = ({ playerName, choiced, setChoiceOfPlayer, choiceOfPlayer, results, setResults, setUpdatedResult, updatedResult, gameMode, currentResult, setWinner }) => {
  
  
  const handleClick = (val) => {
    // setUpdatedResult(false)
    setChoiceOfPlayer(val);
    currentResult.current.push({name: playerName, choice: val});
    results[playerName] = (results[playerName] || []).concat([val]);
    setResults(results);
    
    choiced.current = choiced.current + 1;
    if (choiced.current == 2 && gameMode == 1) {
      setUpdatedResult(true);
      
      if((currentResult.current[0].choice == currentResult.current[1].choice - 1)|| (currentResult.current[1].choice == currentResult.current[0].choice - 2)){
        setWinner(`${currentResult.current[0].name} Win!`)
      } else if((currentResult.current[1].choice == currentResult.current[0].choice - 1)|| (currentResult.current[0].choice == currentResult.current[1].choice - 2)){
        setWinner(`${currentResult.current[1].name} Win!`)
      } else {
        setWinner('It is a Tie')
      }
      currentResult.current = [];
      choiced.current = 0;
    }
    if (gameMode == 2 && choiced.current == 1) {
      choiced.current = choiced.current + 1;
      const randomInt = Math.floor(Math.random() * 3);
      results['computer'] = (results['computer'] || []).concat([randomInt]);
      currentResult.current.push({name: 'computer', choice: randomInt});
      if((currentResult.current[0].choice == currentResult.current[1].choice - 1)|| (currentResult.current[1].choice == currentResult.current[0].choice - 2)){
        setWinner(`${currentResult.current[0].name} Win!`)
      } else if((currentResult.current[1].choice == currentResult.current[0].choice - 1)|| (currentResult.current[0].choice == currentResult.current[1].choice - 2)){
        setWinner(`Regret!${currentResult.current[0].name} you lost this time!`)
      }
      else {
        setWinner('It is a Tie')
      }
      
      setResults(results);
      setUpdatedResult(true);
      choiced.current = 0;
      currentResult.current = [];
    }
  }

  return (
    <div className='selection-container'>
      <section className='playing-container'>
        <div >
          <h2>{playerName}</h2>
          {playerName == 'computer'
            ? <section>Picked random</section>
            : choiceOfPlayer == null
              ? <section className='playing-icons'>
                <FontAwesomeIcon icon={faHandRock} size='3x' className='rock' onClick={() => handleClick(0)} />
                <FontAwesomeIcon icon={faHandPaper} size='3x' className='paper' onClick={() => handleClick(2)} />
                <FontAwesomeIcon icon={faHandScissors} size='3x' className='scissor' onClick={() => handleClick(1)} />
              </section>
              : <p>You picked</p>}
        </div>
      </section>
    </div>
  )
}

export default UserSelectionForm
