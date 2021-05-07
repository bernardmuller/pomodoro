import React, {useState, useEffect} from 'react'
import '../Styles/Timer.css'

function Timer() {   
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5); 
    const [displayMesage, setDisplayMesage] = useState(false);
    

    useEffect(()=>{
        let interval = setInterval(()=>{
            clearInterval(interval);

            if(seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1)
                } else {
                    let minutes = displayMesage? 24 : 4;
                    let seconds = 59;

                    setMinutes(minutes);
                    setSeconds(seconds);
                    setDisplayMesage(!displayMesage)
                }
            } else { 
                setSeconds( seconds - 1);
            }
        }, 1000)
    }, [seconds])

    const timerMinutes = minutes < 10? `0${minutes}`: minutes;
    const timerSeconds = seconds < 10? `0${seconds}`: seconds;


    return (
        <div className="timer_Container">
            {displayMesage? <div className="message">
                <h2>Break</h2>
            </div> : null
            }
            <div className="timer_Face">
                {timerMinutes}:{timerSeconds}
            </div>         
        </div>
    )
}

export default Timer
