// import { useState } from 'react'
import SettingsColorSection from './SettingsColorSection'
import SettingsFontSection from './SettingsFontSection'
import SettingsTimeSection from './SettingsTimeSection'

const Modal = ({handleKeyDown, modal, maxValue, minValue, toggleModal, handleClickApply, timePomodoro, timeShortBreak, timeLongBreak, handleTimePomodoro, handleTimeShortBreak, handleTimeLongBreak, firstFont, secondFont, thirdFont, classFirstFont, classSecondFont, classThirdFont, handleClickFirstFont, handleClickSecondFont, handleClickThirdFont, updateFirstFont, updateSecondFont, updateThirdFont, handleClickFirstColor, handleClickSecondColor, handleClickThirdColor, toggleFirstColor, toggleSecondColor, toggleThirdColor, updateFirstColor, updateSecondColor, updateThirdColor}) => {

    // const [modal, setModal] = useState(false)

    // const toggleModal = () => {
    //     setModal(!modal)
    // }

    // const handleClickApply = (ev) => {
    //     setModal(false)
    // }

    const handleSubmit = (ev) => {
        ev.preventDefault()
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
                <form className='settings-container' onSubmit={handleSubmit}>

                    {/* Header Section */}
                    <section className='settings-container-header'>
                        <h2 className={`settings-container-header-title ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
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
                        handleKeyDown={handleKeyDown}
                        maxValue={maxValue}
                        minValue={minValue}
                        handleClickApply={handleClickApply}
                        timePomodoro={timePomodoro}
                        timeShortBreak={timeShortBreak}
                        timeLongBreak={timeLongBreak}
                        handleTimePomodoro={handleTimePomodoro}
                        handleTimeShortBreak={handleTimeShortBreak}
                        handleTimeLongBreak={handleTimeLongBreak}

                        updateFirstFont={updateFirstFont}
                        updateSecondFont={updateSecondFont}
                        updateThirdFont={updateThirdFont}
                    >
                    </SettingsTimeSection>
                    <hr className='first-line' />

                    {/* Font Section */}
                    <SettingsFontSection
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
                    >
                    </SettingsFontSection>
                    {/* <hr className='first-line' /> */}

                    {/* Color Section */}
                    {/*
                    <SettingsColorSection
                        updateFirstFont={updateFirstFont}
                        updateSecondFont={updateSecondFont}
                        updateThirdFont={updateThirdFont}

                        handleClickFirstColor={handleClickFirstColor}
                        handleClickSecondColor={handleClickSecondColor}
                        handleClickThirdColor={handleClickThirdColor}

                        toggleFirstColor={toggleFirstColor}
                        toggleSecondColor={toggleSecondColor}
                        toggleThirdColor={toggleThirdColor}
                    >
                    </SettingsColorSection>
                    */}

                    <div className='settings-container-apply-container'>
                        <button 
                            className={`settings-container-apply-container-button ${updateFirstFont} ${updateSecondFont} ${updateThirdFont} ${updateFirstColor} ${updateSecondColor} ${updateThirdColor}`}
                            type='submit'
                            onClick={handleClickApply}
                            onKeyDown={handleKeyDown}
                        >
                            apply
                        </button>
                    </div>

                </form>
            </div>
        )}
      </>
    )
}

export default Modal