import { useContext } from 'react'
import { myBasket } from '../App'
import './HomePage.css';
function HomePage() 
{
    const { stage } = useContext(myBasket)// { stage: setGameStage }
    // stage = setGameStage

    function goToQuestion()
    {
        // Logic to go execute Question component
        stage("question")
    }

  return (
    <div>
        <button onClick={goToQuestion}>Start Quiz</button>
    </div>
  )
}

export default HomePage