import '../styles/App.scss'
import Homepage from './Homepage'
import Header from './Header'
import Modal from './Modal'
import { useState } from 'react'


function App() {
    // from here Time section
    const [timePomodoro, setTimePomodoro] = useState(25)
    const [timeShortBreak, setTimeShortBreak] = useState(5)
    const [timeLongBreak, setTimeLongBreak] = useState(15)
    // end here Time section

    /* ************************************************************* */

    // from here Font section
    const [firstFont, setFirstFont] = useState(true)
    const [secondFont, setSecondFont] = useState(false)
    const [thirdFont, setThirdFont] = useState(false)
    
    const [classFirstFont, setClassFirstFont] = useState('kumbh-sans-font')
    const [classSecondFont, setClassSecondFont] = useState('')
    const [classThirdFont, setClassThirdFont] = useState('')
    // end here Font section

    /* ************************************************************* */

    // from here Color section
    const [firstColor, setFirstColor] = useState(true)
    const [secondColor, setSecondColor] = useState(false)
    const [thirdColor, setThirdColor] = useState(false)

    const [classFirstColor, setClassFirstColor] = useState('first-color-background')
    const [classSecondColor, setClassSecondColor] = useState('')
    const [classThirdColor, setClassThirdColor] = useState('')
    // end here Color Section

    /* ************************************************************* */

    // from here Time functions
    const handleTimePomodoro = (value) => {
        setTimePomodoro(value)
    }

    const handleTimeShortBreak = (value) => {
        setTimeShortBreak(value)
    }

    const handleTimeLongBreak = (value) => {
        setTimeLongBreak(value)
    }
    // end here Time functions

    /* ************************************************************* */

    // from here Font functions
    const handleClickFirstFont = () => {
        setFirstFont(true)
        setSecondFont(false)
        setThirdFont(false)
        setClassFirstFont('kumbh-sans-font')
        setClassSecondFont('')
        setClassThirdFont('')
    }

    const handleClickSecondFont = () => {
        setSecondFont(true)
        setFirstFont(false)
        setThirdFont(false)
        setClassSecondFont('roboto-slab-font')
        setClassFirstFont('')
        setClassThirdFont('')
    }

    const handleClickThirdFont = () => {
        setThirdFont(true)
        setFirstFont(false)
        setSecondFont(false)
        setClassThirdFont('space-mono-font')
        setClassFirstFont('')
        setClassSecondFont('')
    }

    const updateFirstFont = classFirstFont ? 'kumbh-sans-font' : ''
    const updateSecondFont = classSecondFont ? 'roboto-slab-font' : ''
    const updateThirdFont = classThirdFont ? 'space-mono-font' : ''
    // end here Font functions

    /* ************************************************************* */

    // from here Color functions
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

    const toggleFirstColor = firstColor ? 'active-color' : 'inactive-color'
    const toggleSecondColor = secondColor ? 'active-color' : 'inactive-color'
    const toggleThirdColor = thirdColor ? 'active-color' : 'inactive-color'

    const updateFirstColor = classFirstColor ? 'first-color-background' : ''
    const updateSecondColor = classSecondColor ? 'second-color-background' : ''
    const updateThirdColor = classThirdColor ? 'third-color-background' : ''
    // end here Color functions
    
    const handleClickApply = () => {
      console.log('hola');
    }
  return (
    <div className='main'>
      <Header></Header>
      <Homepage
        timePomodoro={timePomodoro}
        timeShortBreak={timeShortBreak}
        timeLongBreak={timeLongBreak}
      >
      </Homepage>
      <Modal 
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

        handleClickApply={handleClickApply}
      >
      </Modal>
    </div>
  )
}

export default App