import { useState } from "react"

const ButtonsContainer = ({timePomodoro, timeShortBreak, timeLongBreak}) => {

    const [time, setTime] = useState(timePomodoro)
    const [buttonStatePomodoro, setButtonStatePomodoro] = useState(true)
    const [buttonStateShortBreak, setButtonStateShortBreak] = useState(false)
    const [buttonStateLongBreak, setButtonStateLongBreak] = useState(false)

    const handleClickPomodoro = () => {
        setTime(timePomodoro)
        setButtonStatePomodoro(true)
        setButtonStateShortBreak(false)
        setButtonStateLongBreak(false)
    }

    const handleClickShortBreak = () => {
        setTime(timeShortBreak)
        setButtonStateShortBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateLongBreak(false)
    }

    const handleClickLongBreak = () => {
        setTime(timeLongBreak)
        setButtonStateLongBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateShortBreak(false)
    }

    let toggleClassCheck = buttonStatePomodoro ? 'active-button' : 'inactive-button'
    let toggleClassCheckShortBreak = buttonStateShortBreak ? 'active-button' : 'inactive-button'
    let toggleClassCheckLongBreak = buttonStateLongBreak ? 'active-button' : 'inactive-button'

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
                <p className='circle-line-time-pomodoro'>
                    {time}
                </p>
                <button className='circle-line-time-button-start'>start</button>
                </div>
            </div>
        </>
    )
}

export default ButtonsContainer