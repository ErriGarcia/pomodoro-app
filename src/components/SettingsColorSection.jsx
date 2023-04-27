const SettingsColorSection = ({updateFirstFont, updateSecondFont, updateThirdFont, handleClickFirstColor, handleClickSecondColor, handleClickThirdColor, toggleFirstColor, toggleSecondColor, toggleThirdColor}) => {

    return (
        <section className='settings-container-color'>
            <h3 className={`settings-container-color-title ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
            color
            </h3>
            <div className='settings-container-color-container'>
                <button 
                    className='settings-container-color-container-button-1'
                    onClick={handleClickFirstColor}
                >
                    <span className={`material-icons ${toggleFirstColor}`}>
                    done
                    </span>
                </button>
                <button 
                    className='settings-container-color-container-button-2'
                    onClick={handleClickSecondColor}
                >
                    <span className={`material-icons ${toggleSecondColor}`}>
                    done
                    </span>
                </button>
                <button 
                    className='settings-container-color-container-button-3'
                    onClick={handleClickThirdColor}
                >
                    <span className={`material-icons ${toggleThirdColor}`}>
                    done
                    </span>
                </button>
            </div>
        </section>
    )
}

export default SettingsColorSection