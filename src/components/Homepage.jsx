import click from '../assets/click.mp3'

const Homepage = ({pomodoroRounds, updateFirstFont, updateSecondFont, updateThirdFont, toggleClassCheck, toggleClassCheckShortBreak, toggleClassCheckLongBreak, handleClickPomodoro, handleClickShortBreak, handleClickLongBreak, minutes, seconds, handleStartRestartClick, textButton}) => {

    const playClickSound = () => {
        new Audio(click).play()
    }

    return (
        <>
            <div className='main-container-buttons'>
                <button 
                    className={`main-container-buttons-button-1 ${toggleClassCheck} ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                    onClick={handleClickPomodoro}
                >
                    pomodoro
                </button>
                <button 
                    className={`main-container-buttons-button-2 ${toggleClassCheckShortBreak} ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                    onClick={handleClickShortBreak}
                >
                    short break
                </button>
                <button 
                    className={`main-container-buttons-button-3 ${toggleClassCheckLongBreak} ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}
                    onClick={handleClickLongBreak}
                >
                    long break
                </button>
            </div>
            <div className='circle'>
                <div className='circle-line-time' id='timer'>
                    <div className={`circle-line-time-pomodoro ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
                        {minutes < 10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}
                    </div>
                    <button
                        onClick={() => {handleStartRestartClick(); playClickSound()}}
                        className={`circle-line-time-button-start ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>{textButton}
                    </button>
                </div>
            </div>
            <div className={`main-pomodoro-rounds ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}># {pomodoroRounds}</div>
        </>
    )
}

export default Homepage