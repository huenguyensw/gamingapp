import React from 'react'

const HistoryForm = ({name1, name2, choice1, choice2}) => {
  return (
    <li>
        {name1}({choice1}) - {name2}({choice2})
    </li>
  )
}

export default HistoryForm
