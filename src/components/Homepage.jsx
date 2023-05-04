import { useRef, useState } from 'react'

const Homepage = ({timePomodoro, timeShortBreak, timeLongBreak, updateFirstFont, updateSecondFont, updateThirdFont, updateFirstColor, updateSecondColor, updateThirdColor}) => {

    const [minutes, setMinutes] = useState(timePomodoro)
    const [seconds, setSeconds] = useState(0)
    const [buttonStatePomodoro, setButtonStatePomodoro] = useState(true)
    const [buttonStateShortBreak, setButtonStateShortBreak] = useState(false)
    const [buttonStateLongBreak, setButtonStateLongBreak] = useState(false)
    const interval = useRef(0)
    const [textButton, setTextButton] = useState('start')
    
    const handleClickPomodoro = () => {
        resetCountDown(timePomodoro, 0)
        // setMinutes(timePomodoro) // write this when click on button apply
        setButtonStatePomodoro(true)
        setButtonStateShortBreak(false)
        setButtonStateLongBreak(false)
        setTextButton('start')
    }

    const handleClickShortBreak = () => {
        resetCountDown(timeShortBreak, 0)
        // setMinutes(timeShortBreak) // write this when click on button apply
        // setSeconds(0)
        setButtonStateShortBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateLongBreak(false)
        setTextButton('start')
    }

    const handleClickLongBreak = () => {
        resetCountDown(timeLongBreak, 0)
        // setMinutes(timeLongBreak) // write this when click on button apply
        // setSeconds(0)
        setButtonStateLongBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateShortBreak(false)
        setTextButton('start')
    }

    let toggleClassCheck = buttonStatePomodoro ? 'active-button' : 'inactive-button'
    let toggleClassCheckShortBreak = buttonStateShortBreak ? 'active-button' : 'inactive-button'
    let toggleClassCheckLongBreak = buttonStateLongBreak ? 'active-button' : 'inactive-button'

    if (seconds < 0) {

        if (minutes !== 0) {
            setMinutes(minutes => minutes -1)
            setSeconds(59)
        }

    }

    const countDown = () => {
        interval.current = setInterval(() => {
            setSeconds(seconds => seconds -1)
            }, 1000)
    }

    const resetCountDown = (minutes, seconds) => {
        clearInterval(interval.current)
        setMinutes(minutes)
        setSeconds(seconds)
    }
    

    const handleStartRestartClick = () => {
        if (textButton === 'start') {
            countDown()
            setTextButton('restart')
        } 
        if (textButton === 'restart') {

            if (buttonStatePomodoro) {
                resetCountDown(timePomodoro, 0)
            }

            if (buttonStateShortBreak) {
                resetCountDown(timeShortBreak, 0)
            }

            if (buttonStateLongBreak) {
                resetCountDown(timeLongBreak, 0)
            }
            
            setTextButton('start')
        }
    }

    return (
        <>
            <div className='main-container-buttons'>
                <button 
                    className={`main-container-buttons-button-1 ${toggleClassCheck} ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                    onClick={handleClickPomodoro}
                >
                    pomodoro
                </button>
                <button 
                    className={`main-container-buttons-button-2 ${toggleClassCheckShortBreak} ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                    onClick={handleClickShortBreak}
                >
                    short break
                </button>
                <button 
                    className={`main-container-buttons-button-3 ${toggleClassCheckLongBreak} ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                    onClick={handleClickLongBreak}
                >
                    long break
                </button>
            </div>
            <div className='circle'>
                <div className='circle-line-time'>
                <div className={`circle-line-time-pomodoro ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
                    {minutes < 10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}
                </div>
                <button
                    onClick={handleStartRestartClick}
                    className={`circle-line-time-button-start ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>{textButton}
                </button>
                </div>
            </div>
        </>
    )
}

export default Homepage