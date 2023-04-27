import { useState } from 'react'
import SettingsColorSection from './SettingsColorSection'
import SettingsFontSection from './SettingsFontSection'
import SettingsTimeSection from './SettingsTimeSection'

const Modal = ({timePomodoro, timeShortBreak, timeLongBreak, handleTimePomodoro, handleTimeShortBreak, handleTimeLongBreak}) => {
    
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleClick = () => {
        
    }

    return (
        <>
        <button className='settings-button'
        onClick={toggleModal}>
            <span className='material-icons'>
                settings
            </span>
        </button>

        {modal && (
            <div className='modal'>
                <div className='settings-container'>

                    {/* Header Section */}
                    <section className='settings-container-header'>
                        <h2 className='settings-container-header-title'>
                        settings
                        </h2>
                        <button className='settings-container-header-button-close'
                        onClick={toggleModal}>
                            <span className='material-symbols-outlined'>
                                close
                            </span>
                        </button>
                    </section>
                    <hr className='first-line' />

                    {/* Time Section */}
                    <SettingsTimeSection
                        timePomodoro={timePomodoro}
                        timeShortBreak={timeShortBreak}
                        timeLongBreak={timeLongBreak}
                        handleTimePomodoro={handleTimePomodoro}
                        handleTimeShortBreak={handleTimeShortBreak}
                        handleTimeLongBreak={handleTimeLongBreak}
                    >
                    </SettingsTimeSection>
                    <hr className='first-line' />

                    {/* Font Section */}
                    <SettingsFontSection></SettingsFontSection>
                    <hr className='first-line' />

                    {/* Color Section */}
                    <SettingsColorSection></SettingsColorSection>

                    <div className='settings-container-apply-container'>
                        <button 
                            className='settings-container-apply-container-button'
                            onClick={handleClick}
                        >
                            apply
                        </button>
                    </div>

                </div>
            </div>
        )}
      </>
    )
}

export default Modal