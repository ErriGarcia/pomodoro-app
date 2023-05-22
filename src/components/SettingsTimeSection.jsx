const SettingsTimeSection = ({handleKeyDown, maxValue, minValue, timePomodoro, timeShortBreak, timeLongBreak, handleTimePomodoro, handleTimeShortBreak, handleTimeLongBreak, updateFirstFont, updateSecondFont, updateThirdFont}) => {

    const handleInputTimePomodoro = (ev) => {
        handleTimePomodoro(ev.target.value)
    }

    const handleInputTimeShortBreak = (ev) => {
        handleTimeShortBreak(ev.target.value)
    }

    const handleInputTimeLongBreak = (ev) => {
        handleTimeLongBreak(ev.target.value)
    }

    const showOrHideErrorMessage = () => {
        if (timePomodoro > maxValue || timePomodoro < minValue) {
            return ''
        } else if (timeShortBreak > maxValue || timeShortBreak < minValue) {
            return ''
        } else if (timeLongBreak > maxValue || timeLongBreak < minValue) {
            return ''
        } else {
            return 'display-none'
        }
    }
    
    const showOrHideBorderErrorPomodoro = () => {
        if (timePomodoro > maxValue || timePomodoro < minValue) {
            return 'border-error'
        } else {
            return ''
        }
    }

    const showOrHideBorderErrorShortBreak = () => {
        if (timeShortBreak > maxValue || timeShortBreak < minValue) {
            return 'border-error'
        } else {
            return ''
        }
    }

    const showOrHideBorderErrorLongBreak = () => {
        if (timeLongBreak > maxValue || timeLongBreak < minValue) {
            return 'border-error'
        } else {
            return ''
        }
    }

    return (
        <fieldset className='settings-container-time'>
            <h3 className={`settings-container-time-title ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
            time (minutes)
            </h3>
            <section className='settings-container-time-form'>
                <div className='settings-container-time-form-container'>
                    <label className={`settings-container-time-form-container-label ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`} htmlFor='pomodoro'>
                    pomodoro
                    </label>
                    <input 
                        className={`settings-container-time-form-container-input ${updateFirstFont} ${updateSecondFont} ${updateThirdFont} ${showOrHideBorderErrorPomodoro()}`}
                        type='number' 
                        name='pomodoro' 
                        id='pomodoro'
                        value={timePomodoro}
                        min={minValue}
                        max={maxValue}
                        onChange={handleInputTimePomodoro}
                        onKeyDown={handleKeyDown}

                    />
                </div>

                <div className='settings-container-time-form-container'>
                    <label className={`settings-container-time-form-container-label ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`} htmlFor='short-break'>
                    short break
                    </label>
                    <input 
                        className={`settings-container-time-form-container-input ${updateFirstFont} ${updateSecondFont} ${updateThirdFont} ${showOrHideBorderErrorShortBreak()}`} 
                        name='short-break' 
                        id='short-break' 
                        type='number'
                        min={minValue}
                        max={maxValue}
                        value={timeShortBreak}
                        onChange={handleInputTimeShortBreak}
                        onKeyDown={handleKeyDown}
                    />
                </div>


                <div className='settings-container-time-form-container'>
                    <label className={`settings-container-time-form-container-label ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}  htmlFor='long-break'>
                    long break
                    </label>
                    <input 
                        className={`settings-container-time-form-container-input ${updateFirstFont} ${updateSecondFont} ${updateThirdFont} ${showOrHideBorderErrorLongBreak()}`} 
                        name='long-break' 
                        id='long-break' 
                        type='number'
                        min={minValue}
                        max={maxValue}
                        value={timeLongBreak}
                        onChange={handleInputTimeLongBreak}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </section>
            <div className={`settings-container-time-error ${showOrHideErrorMessage()}`}>
                <span className='material-symbols-outlined settings-container-time-error-icon'>
                    priority_high
                </span>
                <p className='settings-container-time-error-message'>Please enter a valid number between 1 and 60</p>
            </div>
        </fieldset>
    )
}

export default SettingsTimeSection