import React from 'react'

const History = ({player1, player2, results}) => {
  console.log(results)
  return (
    <div className='border-history'>
      {/* I en lista därunder skall de
      senaste matchresultaten, upp till max 10 stycken, redovisas med vinnaren i
      fetstil. (t.ex. ”Gunnar (sten) – Datorn (sax)”). I en rubrik ovan listan skall
      anges vad ställningen är för de resultat som ligger i listan, t.ex. att det är 7 –
      3 till Gunnar över datorn */}

        <h3>History moves:</h3>

        {/* <p>{player1}chose {results} and {player2} chose {results}</p> */}
        {/* console.log(results) */}

        


    </div>
  )
}

export default History
