import React from 'react'
import { myBasket } from '../App'
import Timer from './Timer'
import  './Question.css'

const questions = [
    {
        title: "What is the use of React?",
        A: "To cook food",
        B: "To play games",
        C: "To develop front-end",
        D: "All the above",
        Answer: "C"
    },
    {
        title: "What is the primary use of Python?",
        A: "To fly airplanes",
        B: "To perform data analysis",
        C: "To bake cookies",
        D: "All of the above",
        Answer: "B"
    },
    {
        title: "What is the purpose of SQL?",
        A: "To drive cars",
        B: "To manage databases",
        C: "To paint pictures",
        D: "All of the above",
        Answer: "B"
    },
    {
        title: "What is the role of Node.js?",
        A: "To compose music",
        B: "To build rockets",
        C: "To develop server-side applications",
        D: "All of the above",
        Answer: "C"
    }
]

function Question(props) 
{

    const { stage, myScore, mySetScore } = React.useContext(myBasket)
    // stage = setGameStage
    // myScore = score
    // mySetScore = setScore

    const [ questionIndex, setQuestionIndex ] = React.useState(0)
    const [ answerStatus, setAnswerStatus ] = React.useState(false)


function goToPrevious(){
    if(answerStatus){
        setAnswerStatus(true)
          setQuestionIndex(questionIndex -1)

         
        
    }

}
    function goToNextQuestion()
    {
        if(answerStatus)
        {
            setAnswerStatus(false)
            // We have to write the logic to go to the next question
            setQuestionIndex(questionIndex + 1)
        }
        else
        {
            alert("Please select the answer and the continue!")
        }
    }

    function collectAnswer(selectedAnswer)
    {
        if(questions[questionIndex].Answer == selectedAnswer)
        {
            // Answer is correct
            mySetScore(myScore + 1)
        }
        else
        {
            if(myScore < 0)
            {
                myScore = 0
            }
            else
            {
                mySetScore(myScore - 1)
            }
        }
        // Logic to change the status to true
        setAnswerStatus(true)
    }

    function goToResult()
    {
        // Logic for that last question any answer is selected or not????
        if(answerStatus)
        {
            setAnswerStatus(false)
             // Logic to go to result component
            stage("result")
            // send the score
        }
        else
        {
            alert("Please select the answer and the continue!")   
        }
    }

  return (
    <div>
           {props.children}
           <h2>{questions[questionIndex].title}</h2>

           <button onClick={function()
            {
                collectAnswer("A")
            }
           }>{questions[questionIndex].A}</button>
           <button onClick={function()
            {
                collectAnswer("B")
            }
           }>{questions[questionIndex].B}</button>
           <button onClick={function()
            {
                collectAnswer("C")
            }
           }>{questions[questionIndex].C}</button>
           <button onClick={function()
            {
                collectAnswer("D")
            }
           }>{questions[questionIndex].D}</button>

    

            {/* Logic to control next button and submit button */}
            { questionIndex ==  questions.length - 1 ? <button onClick={goToResult}>Submit</button> : <button onClick={goToNextQuestion}>Next</button>} 
                {
                    <button onClick={goToPrevious}>Previous</button>
                }     
    </div>
  )
}

export default Question