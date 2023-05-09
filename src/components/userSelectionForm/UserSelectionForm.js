import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper, faHandRock } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';


// const fakeResults = {
//   Ha: [0,1,2,3,5,6,8,9,0,11,12],
//   Hue: [0,12,24,3,15,6,8,9,0,11,12]
// }


const UserSelectionForm = ({ playerName, choiced, setChoiceOfPlayer, choiceOfPlayer, results, setResults, setUpdatedResult, updatedResult, gameMode }) => {
  const handleClick = (val) => {
    // setUpdatedResult(false)
    setChoiceOfPlayer(val);
    results[playerName] = (results[playerName] || []).concat([val]);
    setResults(results);
    console.log(val)
    console.log(results)
    choiced.current = choiced.current + 1;
    if (choiced.current == 2 && gameMode == 1) {
      setUpdatedResult(true);
      choiced.current = 0;
    }
    if (gameMode == 2 && choiced.current == 1) {
      choiced.current = choiced.current + 1;
      const randomInt = Math.floor(Math.random() * 3);
      results['computer'] = (results['computer'] || []).concat([randomInt]);
      console.log(results);
      setResults(results);
      setUpdatedResult(true);
      choiced.current = 0;
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
                <FontAwesomeIcon icon={faHandRock} size='3x' onClick={() => handleClick(0)} />
                <FontAwesomeIcon icon={faHandScissors} size='3x' onClick={() => handleClick(1)} />
                <FontAwesomeIcon icon={faHandPaper} size='3x' onClick={() => handleClick(2)} />
              </section>
              : <p>You picked</p>}
        </div>
      </section>
    </div>
  )
}

export default UserSelectionForm
