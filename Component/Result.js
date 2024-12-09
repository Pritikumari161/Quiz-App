import React from 'react'
import { myBasket } from '../App'
import './Result.css'

function Result() 
{
  const { myScore } = React.useContext(myBasket)
  // myScore = score

  return (
    <div>
        <h1>Your total score is: {myScore}</h1>
    </div>
  )
}

export default Result