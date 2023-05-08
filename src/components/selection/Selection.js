import React, { useState } from 'react'
import UserSelectionForm from '../userSelectionForm/UserSelectionForm'

const Selection = ({gameMode, player1, player2}) => {
  const [choice, setChoice] = useState(false);
  
  if(gameMode === 1){
    if(!choice){
      return (
        <UserSelectionForm playerName = {player1} choice={choice} setChoice={setChoice}/>
      )
    } else{
      return (
        <UserSelectionForm playerName = {player2} choice={choice} setChoice={setChoice}/>
      )
    }
  } else if(gameMode === 2){
    if(!choice){
      return (
        <UserSelectionForm playerName = {player1} choice={choice} setChoice={setChoice}/>
      )
    } else{
      return (
        <UserSelectionForm playerName={'computer'} choice={choice} setChoice={setChoice}/>
      )
    }
  }
  return (
    <div>
      {/* 
      1-if human-human mode:
      display user1's selection screen including 3 icons(rock, scissor, paper).
       After user1 made a choice. user2's selection screen is displayed.
       list of results are updated
      
      2-If human-computer mode:
      display user's selection screen including 3 icons(rock, scissor, paper)
      after user made a choice. computer screen is shown with only notification: computer is choosing or something else. Don't show computer's choice on the screen.
      list of results are updated.
       */}

      

    </div>
  )
}

export default Selection
