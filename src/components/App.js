import '../styles/App.scss'
import logo from '../images/logo.svg'


function App() {
  return (
    <div className='main'>
      <header>
        <img className='main-logo' src={logo} alt="logo" />
      </header>

      {/* Buttons */}
      <div className='main-container-buttons'>
        <button className='main-container-buttons-button-1'>pomodoro</button>
        <button className='main-container-buttons-button-2'>short break</button>
        <button className='main-container-buttons-button-3'>long break</button>
      </div>

      {/* Circle */}
      <div className='circle'>
        <div className='circle-line-time'>
          <button className='button-start'>start</button>
        </div>
      </div>

      {/* Settings */}
      <button className='settings-button'>
        <span className='material-icons'>
          settings
        </span>
      </button>

      {/* Container overlay */}
      <div className='settings-container'>
        <section className='settings-container-header'>
          <h2 className='settings-container-header-title'>
            settings
          </h2>
          <button className='settings-container-header-button-close'>
            <span className='material-icons-outlined'>
              close
            </span>
          </button>
        </section>

        <hr />

        <section className='settings-container-time'>
          <h3 className='settings-container-time-title'>
            time (minutes)
          </h3>
          <form className='settings-container-time-form'>
            <label className='settings-container-time-form-label' htmlFor='pomodoro'>
              pomodoro
              <input className='settings-container-time-form-label-input' type='number' min='1' max='25' />
            </label>

            <label className='settings-container-time-form-label' htmlFor='pomodoro'>
              short break
              <input className='settings-container-time-form-label-input' type='number' min='1' max='5' />
            </label>

            <label className='settings-container-time-form-label' htmlFor='pomodoro'>
              long break
              <input className='settings-container-time-form-label-input' type='number' min='1' max='15' />
            </label>
          </form>
        </section>

        <hr />

        <section className='settings-container-font'>
          <h3 className='settings-container-font-title'>
            Font
          </h3>
          <div className='settings-container-font-container'>
            <button className='settings-container-font-container-button-1'>aa</button>
            <button className='settings-container-font-container-button-2'>aa</button>
            <button className='settings-container-font-container-button-3'>aa</button>
          </div>
        </section>

        <hr />

        <section className='settings-container-color'>
          <h3 className='settings-container-color-title'>
            color
          </h3>
          <div className='settings-container-color-container'>
            <button className='settings-container-color-container-button-1'>red</button>
            <button className='settings-container-color-container-button-2'>aqua</button>
            <button className='settings-container-color-container-button-3'>violet</button>
          </div>
        </section>

        <button>apply</button>

      </div>
      
    </div>
  )
}

export default App
