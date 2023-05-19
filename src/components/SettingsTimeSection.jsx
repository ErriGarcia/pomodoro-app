const SettingsTimeSection = ({maxValue, minValue, timePomodoro, timeShortBreak, timeLongBreak, handleTimePomodoro, handleTimeShortBreak, handleTimeLongBreak, updateFirstFont, updateSecondFont, updateThirdFont}) => {

    const handleInputTimePomodoro = (ev) => {
        handleTimePomodoro(ev.target.value)
    }

    const handleInputTimeShortBreak = (ev) => {
        handleTimeShortBreak(ev.target.value)
    }

    const handleInputTimeLongBreak = (ev) => {
        handleTimeLongBreak(ev.target.value)
    }

    // {timePomodoro > maxValue ? maxValue : timePomodoro < minValue ? minValue : timePomodoro}

    return (
        <section className='settings-container-time'>
            <h3 className={`settings-container-time-title ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
            time (minutes)
            </h3>
            <fieldset className='settings-container-time-form'>
                <div className='settings-container-time-form-container'>
                    <label className={`settings-container-time-form-container-label ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`} htmlFor='pomodoro'>
                    pomodoro
                    </label>
                    <input 
                        className={`settings-container-time-form-container-input ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                        type='number' 
                        name='pomodoro' 
                        id='pomodoro'
                        value={timePomodoro}
                        min={minValue}
                        max={maxValue}
                        onChange={handleInputTimePomodoro}
                    />
                </div>

                <div className='settings-container-time-form-container'>
                    <label className={`settings-container-time-form-container-label ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`} htmlFor='short-break'>
                    short break
                    </label>
                    <input 
                        className={`settings-container-time-form-container-input ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`} 
                        name='short-break' 
                        id='short-break' 
                        type='number'
                        min={minValue}
                        max={maxValue}
                        value={timeShortBreak}
                        onChange={handleInputTimeShortBreak}
                    />
                </div>


                <div className='settings-container-time-form-container'>
                    <label className={`settings-container-time-form-container-label ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}  htmlFor='long-break'>
                    long break
                    </label>
                    <input 
                        className={`settings-container-time-form-container-input ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`} 
                        name='long-break' 
                        id='long-break' 
                        type='number'
                        min={minValue}
                        max={maxValue}
                        value={timeLongBreak}
                        onChange={handleInputTimeLongBreak}
                    />
                </div>
            </fieldset>
        </section>
    )
}

export default SettingsTimeSection