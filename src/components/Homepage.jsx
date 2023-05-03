import { useState } from "react"

const ButtonsContainer = ({timePomodoro, timeShortBreak, timeLongBreak}) => {

    let [minutes, setMinutes] = useState(timePomodoro)
    let [seconds, setSeconds] = useState(60)
    const [buttonStatePomodoro, setButtonStatePomodoro] = useState(true)
    const [buttonStateShortBreak, setButtonStateShortBreak] = useState(false)
    const [buttonStateLongBreak, setButtonStateLongBreak] = useState(false)
    let interval;
    
    const handleClickPomodoro = () => {
        setMinutes(timePomodoro)
        setButtonStatePomodoro(true)
        setButtonStateShortBreak(false)
        setButtonStateLongBreak(false)
    }

    const handleClickShortBreak = () => {
        setMinutes(timeShortBreak)
        setButtonStateShortBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateLongBreak(false)
    }

    const handleClickLongBreak = () => {
        setMinutes(timeLongBreak)
        setButtonStateLongBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateShortBreak(false)
    }

    let toggleClassCheck = buttonStatePomodoro ? 'active-button' : 'inactive-button'
    let toggleClassCheckShortBreak = buttonStateShortBreak ? 'active-button' : 'inactive-button'
    let toggleClassCheckLongBreak = buttonStateLongBreak ? 'active-button' : 'inactive-button'

    

    const handleStartClick = () => {
        interval = setInterval(countDown, 1000)
        countDown()
    }

    function countDown() {
        setSeconds(seconds--)
        
        if (seconds === '00') {
            setSeconds(60)
        }

        if (seconds === 0) {
            setMinutes(minutes--)
            setSeconds('60')
        }

        if (minutes === 0) {
            clearInterval(interval)
        }

        console.log(minutes, seconds)
    }

    return (
        <>
            <div className='main-container-buttons'>
                <button 
                    className={`main-container-buttons-button-1 ${toggleClassCheck}`}
                    onClick={handleClickPomodoro}
                >
                    pomodoro
                </button>
                <button 
                    className={`main-container-buttons-button-2 ${toggleClassCheckShortBreak}`}
                    onClick={handleClickShortBreak}
                >
                    short break
                </button>
                <button 
                    className={`main-container-buttons-button-3 ${toggleClassCheckLongBreak}`}
                    onClick={handleClickLongBreak}
                >
                    long break
                </button>
            </div>
            <div className='circle'>
                <div className='circle-line-time'>
                <div className='circle-line-time-pomodoro'>
                    {minutes}:{seconds}
                </div>
                <button
                    onClick={handleStartClick}
                    className='circle-line-time-button-start'>start</button>
                </div>
            </div>
        </>
    )
}

export default ButtonsContainer