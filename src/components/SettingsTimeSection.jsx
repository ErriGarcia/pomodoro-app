const SettingsTimeSection = ({timePomodoro, timeShortBreak, timeLongBreak, handleTimePomodoro, handleTimeShortBreak, handleTimeLongBreak}) => {

    const handleInputTimePomodoro = (ev) => {
        handleTimePomodoro(ev.target.value)
    }

    const handleInputTimeShortBreak = (ev) => {
        handleTimeShortBreak(ev.target.value)
    }

    const handleInputTimeLongBreak = (ev) => {
        handleTimeLongBreak(ev.target.value)
    }

    return (
        <section className='settings-container-time'>
            <h3 className='settings-container-time-title'>
            time (minutes)
            </h3>
            <form className='settings-container-time-form'>
                <div className='settings-container-time-form-container'>
                    <label className='settings-container-time-form-container-label' htmlFor='pomodoro'>
                    pomodoro
                    </label>
                    <input 
                        className='settings-container-time-form-container-input'
                        type='number' 
                        name='pomodoro' 
                        id='pomodoro' 
                        value={timePomodoro}
                        onChange={handleInputTimePomodoro}
                    />
                </div>

                <div className='settings-container-time-form-container'>
                    <label className='settings-container-time-form-container-label' htmlFor='short-break'>
                    short break
                    </label>
                    <input 
                        className='settings-container-time-form-container-input' 
                        name='short-break' 
                        id='short-break' 
                        type='number'
                        value={timeShortBreak}
                        onChange={handleInputTimeShortBreak}
                    />
                </div>


                <div className='settings-container-time-form-container'>
                    <label className='settings-container-time-form-container-label' htmlFor='long-break'>
                    long break
                    </label>
                    <input 
                        className='settings-container-time-form-container-input' 
                        name='long-break' 
                        id='long-break' 
                        type='number'
                        value={timeLongBreak}
                        onChange={handleInputTimeLongBreak}
                    />
                </div>
            </form>
        </section>
    )
}

export default SettingsTimeSection