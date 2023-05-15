import '../styles/App.scss'
import Homepage from './Homepage'
import Header from './Header'
import Modal from './Modal'
import { useRef, useState } from 'react'


function App() {

    // from here **************************** ----> SETTINGS SECTION <---- **************************** //
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleClickApply = () => {
        setModal(false)
    }

    // from here **************************** ----> TIME SECTION <---- **************************** //

    /* variables from the form/modal */
    const [timePomodoro, setTimePomodoro] = useState(25)
    const [timeShortBreak, setTimeShortBreak] = useState(5)
    const [timeLongBreak, setTimeLongBreak] = useState(15)

    /* minutes and seconds in the circle */
    const [minutes, setMinutes] = useState(timePomodoro)
    const [seconds, setSeconds] = useState(0)

    /* buttonState to mark the button when clicked */
    const [buttonStatePomodoro, setButtonStatePomodoro] = useState(true)
    const [buttonStateShortBreak, setButtonStateShortBreak] = useState(false)
    const [buttonStateLongBreak, setButtonStateLongBreak] = useState(false)

    /* interval and textButton for the countDown */
    const interval = useRef(0)
    const [textButton, setTextButton] = useState('start')


    // from here Time functions

    /* handleTime functions to change time based on the form/modal */
    const handleTimePomodoro = (value) => {
        setTimePomodoro(value)
        resetCountDown(value, 0)
        // setMinutes(timePomodoro) // write this when click on button apply
        // setButtonStatePomodoro(true)
        // setButtonStateShortBreak(!true)
        // setButtonStateLongBreak(!true)
        // setTextButton('start')
    }

    const handleTimeShortBreak = (value) => {
        setTimeShortBreak(value)
        resetCountDown(value, 0)
    }

    const handleTimeLongBreak = (value) => {
        setTimeLongBreak(value)
        resetCountDown(value, 0)
    }

    // -------------------- //
    
    /* handleClick to change color buttons when clicked and to manage reset button */
    const handleClickPomodoro = () => {
        resetCountDown(timePomodoro, 0)
        // setMinutes(timePomodoro) // write this when click on button apply
        setButtonStatePomodoro(true)
        setButtonStateShortBreak(!true)
        setButtonStateLongBreak(!true)
        setTextButton('start')
    }

    const handleClickShortBreak = () => {
        resetCountDown(timeShortBreak, 0)
        // setMinutes(timeShortBreak) // write this when click on button apply
        setSeconds(0)
        setButtonStateShortBreak(true)
        setButtonStatePomodoro(!true)
        setButtonStateLongBreak(!true)
        setTextButton('start')
    }

    const handleClickLongBreak = () => {
        resetCountDown(timeLongBreak, 0)
        // setMinutes(timeLongBreak) // write this when click on button apply
        // setSeconds(0)
        setButtonStateLongBreak(true)
        setButtonStatePomodoro(!true)
        setButtonStateShortBreak(!true)
        setTextButton('start')
    }

    // -------------------- //

    /* variables to change css when a button is active or inactive */
    let toggleClassCheck = buttonStatePomodoro ? 'active-button' : 'inactive-button'
    let toggleClassCheckShortBreak = buttonStateShortBreak ? 'active-button' : 'inactive-button'
    let toggleClassCheckLongBreak = buttonStateLongBreak ? 'active-button' : 'inactive-button'

    // -------------------- //

    if (seconds < 0) {
        if (minutes !== 0) {
            setMinutes(minutes => minutes -1)
            setSeconds(59)
        }
    }

    let startingPoint = 100
    let totalSeconds = minutes * 60

    // coefficente che sottraggo al 100% per sincronizzare il tempo con la progress bar
    let nameToChange = 100 / totalSeconds

    const orangeColor = '#F87070'
    const blueColor = '#1E213F'
    const greyColor = '#D7E0FF'
    const aquaColor = '##70F3F8'

    const changePercentBackground = (color) => {
        document.getElementById('timer').style.background = `radial-gradient(closest-side, ${blueColor} 95%, transparent 80% 100%), conic-gradient(${color} ${startingPoint -= nameToChange}%, ${greyColor} 0)`
    }

    const setPercentBackground100 = (color) => {
        document.getElementById('timer').style.background = `radial-gradient(closest-side, ${blueColor} 95%, transparent 80% 100%), conic-gradient(${color} 100%, ${greyColor} 0)`
    }
    
    const countDown = () => {
        interval.current = setInterval(() => {
            setSeconds(seconds => seconds -1)
            changePercentBackground(orangeColor)
        }, 1000)
    }

    /* 
    function resetCountDown
    @param (minutes) reset the countDown minutes
    @param (seconds) reset the countDown seconds
    */
    const resetCountDown = (minutes, seconds) => {
        clearInterval(interval.current)
        setMinutes(minutes)
        setSeconds(seconds)
        setPercentBackground100(orangeColor)
    }


    /*
        Condition to stop the timer when minutes and seconds reach 0
    */
    if (minutes <= 0 && seconds <= 0) {
        clearInterval(interval.current)
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

    // end here Time functions

    /* ************************************************************* */

    // from here **************************** ----> FONT SECTION <---- **************************** //
    const [firstFont, setFirstFont] = useState(true)
    const [secondFont, setSecondFont] = useState(false)
    const [thirdFont, setThirdFont] = useState(false)
    
    const [classFirstFont, setClassFirstFont] = useState('kumbh-sans-font')
    const [classSecondFont, setClassSecondFont] = useState('')
    const [classThirdFont, setClassThirdFont] = useState('')

    // from here Color section
    const [firstColor, setFirstColor] = useState(true)
    const [secondColor, setSecondColor] = useState(false)
    const [thirdColor, setThirdColor] = useState(false)

    const [classFirstColor, setClassFirstColor] = useState('first-color-background')
    const [classSecondColor, setClassSecondColor] = useState('')
    const [classThirdColor, setClassThirdColor] = useState('')

    // -------------------- //

    // from here Font functions
    const handleClickFirstFont = (ev) => {
        setFirstFont(true)
        setSecondFont(false)
        setThirdFont(false)
        // setClassFirstFont('kumbh-sans-font')
        setClassFirstFont(ev.target.value)
        setClassSecondFont('')
        setClassThirdFont('')
    }

    const handleClickSecondFont = (ev) => {
        setSecondFont(true)
        setFirstFont(false)
        setThirdFont(false)
        // setClassSecondFont('roboto-slab-font')
        setClassSecondFont(ev.target.value)
        setClassFirstFont('')
        setClassThirdFont('')
    }

    const handleClickThirdFont = (ev) => {
        setThirdFont(true)
        setFirstFont(false)
        setSecondFont(false)
        // setClassThirdFont('space-mono-font')
        setClassThirdFont(ev.target.value)
        setClassFirstFont('')
        setClassSecondFont('')
    }

    const updateFirstFont = classFirstFont ? 'kumbh-sans-font' : ''
    const updateSecondFont = classSecondFont ? 'roboto-slab-font' : ''
    const updateThirdFont = classThirdFont ? 'space-mono-font' : ''
    // end here Font functions

    /* ************************************************************* */

    // from here **************************** ----> COLOR SECTION <---- **************************** //
    const handleClickFirstColor = () => {
        setFirstColor(true)
        setSecondColor(false)
        setThirdColor(false)
        setClassFirstColor('first-color-background')
        setClassSecondColor('')
        setClassThirdColor('')
    }

    const handleClickSecondColor = () => {
        setSecondColor(true)
        setFirstColor(false)
        setThirdColor(false)
        setClassSecondColor('second-color-background')
        setClassFirstColor('')
        setClassThirdColor('')
    }

    const handleClickThirdColor = () => {
        setThirdColor(true)
        setFirstColor(false)
        setSecondColor(false)
        setClassThirdColor('third-color-background')
        setClassFirstColor('')
        setClassSecondColor('')
    }

    // -------------------- //

    const toggleFirstColor = firstColor ? 'active-color' : 'inactive-color'
    const toggleSecondColor = secondColor ? 'active-color' : 'inactive-color'
    const toggleThirdColor = thirdColor ? 'active-color' : 'inactive-color'

    const updateFirstColor = classFirstColor ? 'first-color-background' : ''
    const updateSecondColor = classSecondColor ? 'second-color-background' : ''
    const updateThirdColor = classThirdColor ? 'third-color-background' : ''
    // end here Color functions

    /* ************************************************************* */
    
  return (
    <div className='main'>
      <Header></Header>
      <Homepage
        timePomodoro={timePomodoro}
        timeShortBreak={timeShortBreak}
        timeLongBreak={timeLongBreak}

        minutes={minutes}
        seconds={seconds}

        toggleClassCheck={toggleClassCheck}
        toggleClassCheckShortBreak={toggleClassCheckShortBreak}
        toggleClassCheckLongBreak={toggleClassCheckLongBreak}

        handleClickPomodoro={handleClickPomodoro}
        handleClickShortBreak={handleClickShortBreak}
        handleClickLongBreak={handleClickLongBreak}
        handleStartRestartClick={handleStartRestartClick}
        textButton={textButton}

        updateFirstFont={updateFirstFont}
        updateSecondFont={updateSecondFont}
        updateThirdFont={updateThirdFont}

        updateFirstColor={updateFirstColor}
        updateSecondColor={updateSecondColor}
        updateThirdColor={updateThirdColor}
      >
      </Homepage>
      <Modal
        modal={modal}
        toggleModal={toggleModal}
        handleClickApply={handleClickApply}
        timePomodoro={timePomodoro}
        timeShortBreak={timeShortBreak}
        timeLongBreak={timeLongBreak}
        
        handleTimePomodoro={handleTimePomodoro}
        handleTimeShortBreak={handleTimeShortBreak}
        handleTimeLongBreak={handleTimeLongBreak}

        firstFont={firstFont}
        secondFont={secondFont}
        thirdFont={thirdFont}
        classFirstFont={classFirstFont}
        classSecondFont={classSecondFont}
        classThirdFont={classThirdFont}
        handleClickFirstFont={handleClickFirstFont}
        handleClickSecondFont={handleClickSecondFont}
        handleClickThirdFont={handleClickThirdFont}

        updateFirstFont={updateFirstFont}
        updateSecondFont={updateSecondFont}
        updateThirdFont={updateThirdFont}

        classFirstColor={classFirstColor}
        classSecondColor={classSecondColor}
        classThirdColor={classThirdColor}
        handleClickFirstColor={handleClickFirstColor}
        handleClickSecondColor={handleClickSecondColor}
        handleClickThirdColor={handleClickThirdColor}
        toggleFirstColor={toggleFirstColor}
        toggleSecondColor={toggleSecondColor}
        toggleThirdColor={toggleThirdColor}

        updateFirstColor={updateFirstColor}
        updateSecondColor={updateSecondColor}
        updateThirdColor={updateThirdColor}

        setMinutes={setMinutes}
      >
      </Modal>
    </div>
  )
}

export default App