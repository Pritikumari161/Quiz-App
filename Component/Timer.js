import { useContext, useEffect, useState } from 'react'
import Result from './Result';
import { myBasket } from '../App';
import './Timer.css';

function Timer() 
{
    const { stage } = useContext(myBasket)

    const [ minutes, setMinutes ] = useState(15)
    // minutes = 15
    
    const [ seconds, setSeconds ] = useState(0)
    // seconds = 0 ==> 59

    // C++ language

    useEffect(function()
    {
        // 15:00 ==> 14:59 ==> 14:58 ==> 14:57 ==> .... ==> 14:00 ==> 13:59
        const countdown = setInterval(function()
        {
            // Logic to generate the time(minutes + seconds)
            if(seconds > 0)
            {
                setSeconds(seconds - 1)
            }
            else
            {
                if(minutes > 0)
                    {
                        setMinutes(minutes - 1)
                        setSeconds(59)
                    }
            }
        }, 1000)  

        return () => clearInterval(countdown)
    }, [minutes, seconds])
    

    // countdown = 1, 2

    function controlTimer()
    {
        if(minutes == 0 && seconds == 0)
        {
            return "Time is up" && stage("result")
        }
    }

  return (
    <div>
        <h3>{ minutes < 10 ? `0${minutes}` : minutes } : { seconds < 10 ? `0${seconds}` : seconds }</h3>
        {controlTimer()}
    </div>
  )
}

export default Timer


// tailwind css, react bootstrap, ..........................