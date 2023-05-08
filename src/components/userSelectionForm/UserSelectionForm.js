import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper, faHandRock } from '@fortawesome/free-solid-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';


const UserSelectionForm = ({ playerName, choice, setChoice }) => {
  const handleClick = () => {
    setChoice(!choice);
  }
  
  return (
    <div className='selection-container'>
      <h2>{playerName}</h2>
      <div className='icons-area'>
        <FontAwesomeIcon icon={faHandRock} size='xl' className='beat-fade'/>
        <FontAwesomeIcon icon={faHandScissors} size='xl' className='beat-fade' />
        <FontAwesomeIcon icon={faHandPaper} />
      </div>
      <button onClick={handleClick}>choose</button>
    </div>
  )
}

export default UserSelectionForm
