import '../styles/App.scss'
import logo from '../images/logo.svg'


function App() {
  return (
    <div className='main'>
      <img className='main-logo' src={logo} alt="logo" />
      <div className='main-container-buttons'>
        <button className='main-container-buttons-1'>pomodoro</button>
        <button className='main-container-buttons-2'>short break</button>
        <button className='main-container-buttons-3'>long break</button>
      </div>
      <h1>

          start 
          pause
          restart

          Settings

          Time (minutes)
          pomodoro
          short break
          long break

          Font
          Color

          Apply</h1>
    </div>
  )
}

export default App
