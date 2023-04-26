import '../styles/App.scss'
import Header from './Header'
// import { useState } from 'react'


function App() {
  return (
    <div className='main'>
      <Header></Header>

      {/* Buttons */}
      <div className='main-container-buttons'>
        <button className='main-container-buttons-button-1'>pomodoro</button>
        <button className='main-container-buttons-button-2'>short break</button>
        <button className='main-container-buttons-button-3'>long break</button>
      </div>

      {/* Circle */}
      <div className='circle'>
        <div className='circle-line-time'>
          <p className='circle-line-time-pomodoro'></p>
          <button className='circle-line-time-button-start'>start</button>
        </div>
      </div>

      {/* Settings */}
      <button className='settings-button'>
        <span className='material-icons'>
          settings
        </span>
      </button>

      {/* Modal Container */}
      <div className='modal'>
        <div className='settings-container'>

          {/* Header Section */}
          <section className='settings-container-header'>
            <h2 className='settings-container-header-title'>
              settings
            </h2>
            <button className='settings-container-header-button-close'>
              <span className='material-symbols-outlined'>
                close
              </span>
            </button>
          </section>
          <hr className='first-line' />

          {/* Time Section */}
          <section className='settings-container-time'>
            <h3 className='settings-container-time-title'>
              time (minutes)
            </h3>
            <form className='settings-container-time-form'>
              <div className='settings-container-time-form-container'>
                <label className='settings-container-time-form-container-label' htmlFor='pomodoro'>
                  pomodoro
                </label>
                <input className='settings-container-time-form-container-input' type='text' name='pomodoro' id='pomodoro' min='1' max='25'/>
              </div>

              <div className='settings-container-time-form-container'>
                <label className='settings-container-time-form-container-label' htmlFor='short-break'>
                  short break
                </label>
                <input className='settings-container-time-form-container-input' name='short-break' id='short-break' type='text' min='1' max='5' />
              </div>


              <div className='settings-container-time-form-container'>
                <label className='settings-container-time-form-container-label' htmlFor='long-break'>
                  long break
                </label>
                <input className='settings-container-time-form-container-input' name='long-break' id='long-break' type='text' min='1' max='15' />
              </div>
            </form>
          </section>
          <hr className='first-line' />

          {/* Font Section */}
          <section className='settings-container-font'>
            <h3 className='settings-container-font-title'>
              Font
            </h3>
            <div className='settings-container-font-container'>
              <button className='settings-container-font-container-button-1'>Aa</button>
              <button className='settings-container-font-container-button-2'>Aa</button>
              <button className='settings-container-font-container-button-3'>Aa</button>
            </div>
          </section>
          <hr className='first-line' />

          {/* Color Section */}
          <section className='settings-container-color'>
            <h3 className='settings-container-color-title'>
              color
            </h3>
            <div className='settings-container-color-container'>
              <button className='settings-container-color-container-button-1'>
                <span className='material-icons'>
                  done
                </span>
              </button>
              <button className='settings-container-color-container-button-2'>
                <span className='material-icons'>
                  done
                </span>
              </button>
              <button className='settings-container-color-container-button-3'>
                <span className='material-icons'>
                  done
                </span>
              </button>
            </div>
          </section>

          <div className='settings-container-apply-container'>
          <button className='settings-container-apply-container-button'>apply</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App