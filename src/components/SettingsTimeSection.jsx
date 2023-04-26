const SettingsTimeSection = () => {
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
    )
}

export default SettingsTimeSection