import '../styles/App.scss'
import ButtonsContainer from './ButtonsContainer'
import Clock from './Clock'
import Header from './Header'
import Modal from './Modal'
import { useState } from 'react'


function App() {
  const [timePomodoro, setTimePomodoro] = useState(25)
    const [timeShortBreak, setTimeShortBreak] = useState(5)
    const [timeLongBreak, setTimeLongBreak] = useState(15)

    const handleTimePomodoro = (value) => {
        setTimePomodoro(value)
    }

    const handleTimeShortBreak = (value) => {
        setTimeShortBreak(value)
    }

    const handleTimeLongBreak = (value) => {
        setTimeLongBreak(value)
    }

  return (
    <div className='main'>
      <Header></Header>
      <ButtonsContainer></ButtonsContainer>
      <Clock></Clock>
      <Modal 
        timePomodoro={timePomodoro}
        timeShortBreak={timeShortBreak}
        timeLongBreak={timeLongBreak}
        handleTimePomodoro={handleTimePomodoro}
        handleTimeShortBreak={handleTimeShortBreak}
        handleTimeLongBreak={handleTimeLongBreak}
      >
      </Modal>
    </div>
  )
}

export default App