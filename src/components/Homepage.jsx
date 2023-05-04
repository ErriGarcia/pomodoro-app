import { useState } from 'react'

const Homepage = ({timePomodoro, timeShortBreak, timeLongBreak, updateFirstFont, updateSecondFont, updateThirdFont, updateFirstColor, updateSecondColor, updateThirdColor}) => {

    const [minutes, setMinutes] = useState(timePomodoro)
    const [seconds, setSeconds] = useState(0)
    const [buttonStatePomodoro, setButtonStatePomodoro] = useState(true)
    const [buttonStateShortBreak, setButtonStateShortBreak] = useState(false)
    const [buttonStateLongBreak, setButtonStateLongBreak] = useState(false)
    let interval;
    const [textButton, setTextButton] = useState('start')
    
    const handleClickPomodoro = () => {
        setMinutes(timePomodoro) // write this when click on button apply
        setButtonStatePomodoro(true)
        setButtonStateShortBreak(false)
        setButtonStateLongBreak(false)
    }

    const handleClickShortBreak = () => {
        setMinutes(timeShortBreak) // write this when click on button apply
        setSeconds(5)
        setButtonStateShortBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateLongBreak(false)
    }

    const handleClickLongBreak = () => {
        setMinutes(timeLongBreak) // write this when click on button apply
        setSeconds(0)
        setButtonStateLongBreak(true)
        setButtonStatePomodoro(false)
        setButtonStateShortBreak(false)
    }

    let toggleClassCheck = buttonStatePomodoro ? 'active-button' : 'inactive-button'
    let toggleClassCheckShortBreak = buttonStateShortBreak ? 'active-button' : 'inactive-button'
    let toggleClassCheckLongBreak = buttonStateLongBreak ? 'active-button' : 'inactive-button'

    
    // useEffect(() => {
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     interval = setInterval(() => {
    //         setSeconds(seconds-1)
    //         setTextButton('restart')

    //         if (seconds === 0) {
    //             setMinutes(minutes-1)
    //             setSeconds(59)
    //         }

    //         // if (minutes === 0 && seconds === 0) {
    //         //     console.log('minutes 0')
    //         //     clearInterval(interval)
    //         // }

    //     }, 1000)
        
    //     if (minutes === 0 && seconds === 0) {
    //         clearInterval(interval)
    //         setTextButton('start')
    //     }
    //     return () => clearInterval(interval)
    // },)

    // if (minutes === 0) {
    //     // clearInterval(setSeconds(0))
    //     console.log('minutes and seconds to 0');
    // }

    if (seconds < 0) {
        setMinutes(minutes => minutes -1)
        setSeconds(59)
        console.log('da 0 a 59')

        if (minutes === 0) {
            clearInterval(setSeconds(0))
            console.log('minutes 0')
        }
    }

    const handleClickStartRestart = () => {
        
        if (textButton === 'start') {
            setTextButton('restart')
            setInterval(() => {
                setSeconds(seconds => seconds -1)
                console.log(seconds)
                
            }, 1000)

        }

        if (textButton === 'restart') {
            clearInterval(interval)
            setMinutes(0)
            setSeconds(0)
        }


        // secondsRef.current--;
        // setSeconds(secondsRef.current)

        // if (textButton === 'start') {
        //     // setSeconds(59)
        //     setTextButton('restart')

        //     if (secondsRef.current === 0) {
        //     console.log('seconds === 0')
        //     setMinutes(minutesRef.current--)
        //     setSeconds(59)
        // }
            
        //     interval = setInterval(() => {
        //         console.log('inside setInterval')
        //         setSeconds(secondsRef.current--)

        //     }, 1000)

        //     console.log('outside setInterval')
        //     setSeconds(secondsRef.current--) 
        // }

        // if (minutes === 0 && seconds === 0) {
        //     clearInterval(interval)
        //     setTextButton('start')
        // }

        // if (textButton === 'restart') {
        //     setMinutes(0)
        //     setSeconds(0)
        //     setTextButton('start')
        // }
    }

    // function countDown() {

        // console.log(typeof seconds)

        // // if (seconds === '0') {
            
        // //     setSeconds('60')
        // // }

        // if (seconds === 0) {
        //     setMinutes(minutes--)
        //     setSeconds(59)
        //     console.log(seconds, 'seconds')
        // }
        

        // if (minutes === 0) {
        //     clearInterval(interval)
        // }

        // setSeconds(seconds--)

    //     if (minutes < 0) {
    //         clearInterval(interval)
    //     } else {
    //         setMinutes(minutes)
    //         setSeconds(seconds)
    //     }

    //     console.log(minutes, seconds)
    // }

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
                    onClick={handleClickStartRestart}
                    className={`circle-line-time-button-start ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>{textButton}</button>
                </div>
            </div>
        </>
    )
}

export default Homepage