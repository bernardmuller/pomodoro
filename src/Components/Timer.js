import React, {useState, useEffect} from 'react'
import '../Styles/Timer.css'

function Timer() {   
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0); 
    const [displayMesage, setDisplayMesage] = useState(false);

    useEffect(()=>{}, [seconds])


    return (
        <div className="timer_Container">
            <div className="message">
                <h2>Break</h2>
            </div>
            <div className="timer_Face">
                <h2 className="time-minute">{minutes}</h2>
                <h2>:</h2>
                <h2 className="time-second">{seconds}</h2>
            </div>         
        </div>
    )
}

export default Timer
