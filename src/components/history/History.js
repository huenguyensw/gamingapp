import React from 'react'

const History = ({ results,setPlayer1TotalScore, setPlayer2TotalScore}) => {

  const keys = Object.keys(results);
  let length = 0;
  let player1Total = 0;
  let player2Total = 0;


  if (keys.length > 1) {
    length = keys.length != 0 && (results[keys[0]].length >= 10 ? 10 : results[keys[0]].length);

  }

  if (keys.length > 1) {
    console.log('test',keys);
    results[keys[0]].map((val, idx) => {
      const val1 = results[keys[0]][results[keys[0]].length - length + idx];
      const val2 = results[keys[1]][results[keys[1]].length - length + idx];
      if (val1 == val2 - 1 || val2 == val1 - 2) {
        player1Total += 1 ;
      } else if (val2 == val1 - 1 || val1 == val2 - 2) {
        player2Total += 1;
      }
    })
    setPlayer1TotalScore(player1Total);
    setPlayer2TotalScore(player2Total);
  }




  return (
    <div className='history-container'>
      <h3>Moves</h3>
      <hr />
    <table className='history'>
      <thead>
        
          {keys.length >1
          ?<tr>
          <th>{keys[0]} ({player1Total})</th>
          <th>{keys[1]} ({player2Total})</th>
          </tr>
          :<tr><th>{keys[0]}</th>
          <th>{keys[1]}</th>
          </tr>}
      </thead>
      <tbody>{(keys.length > 1) && results[keys[0]].slice(-length).map((val, idx) => {
        const val1 = results[keys[0]][results[keys[0]].length - length + idx];
        const val2 = results[keys[1]][results[keys[1]].length - length + idx];
        if (val1 == val2 - 1 || val2 == val1 - 2) {
          
          return (
            <tr key={idx}>
              <td style={{fontSize: '1.5rem'}}>{keys[0]}({val1 == 0 ? 'rock' : val1 == 1 ? 'scissor' : 'paper'})</td>
              <td>{keys[1]}({val2 == 0 ? 'rock' : val2 == 1 ? 'scissor' : 'paper'})</td>
            </tr>);
        } else if (val2 == val1 - 1 || val1 == val2 - 2) {
          
          return (
            <tr key={idx}>
              <td>{keys[0]}({val1 == 0 ? 'rock' : val1 == 1 ? 'scissor' : 'paper'})</td>
              <td style={{fontSize: '1.5rem'}}>{keys[1]}({val2 == 0 ? 'rock' : val2 == 1 ? 'scissor' : 'paper'})</td>
            </tr>);
        } else {
          return (
            <tr key={idx}>
              <td>{keys[0]}({val1 == 0 ? 'rock' : val1 == 1 ? 'scissor' : 'paper'})</td>
              <td>{keys[1]}({val2 == 0 ? 'rock' : val2 == 1 ? 'scissor' : 'paper'})</td>
            </tr>);
        }
      })}
      </tbody>
    </table>
    </div>
  )
}

export default History
