import { useState, createContext } from "react";
import HomePage from "./Component/HomePage";
import Question from "./Component/Question";
import Result from "./Component/Result";
import Timer from "./Component/Timer";


// Create the basket
export const myBasket = createContext()

function App() 
{

  const [ gameStage, setGameStage ] = useState("home")
  // gameStage = "question"
  const [ score, setScore ] = useState(0)

  return (
   <div>
    <myBasket.Provider value={ {stage: setGameStage, myScore: score, mySetScore: setScore} }>
        { gameStage == "home" && <HomePage /> }
        { gameStage == "question" && <Question><Timer /></Question> }
        { gameStage == "result" && <Result /> }
    </myBasket.Provider>
   </div>
  );
}

export default App;


// Conditional Rendering in React ==> &&

// Conditional Rendering(executing) = We will render/execute a component based on some condition