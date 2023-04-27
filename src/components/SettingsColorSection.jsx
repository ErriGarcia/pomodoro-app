import { useState } from 'react'

const SettingsColorSection = () => {

    const [firstColor, setFirstColor] = useState(true)
    const [secondColor, setSecondColor] = useState(false)
    const [thirdColor, setThirdColor] = useState(false)

    const handleClickFirstColor = () => {
        setFirstColor(true)
        setSecondColor(false)
        setThirdColor(false)
    }

    const handleClickSecondColor = () => {
        setSecondColor(true)
        setFirstColor(false)
        setThirdColor(false)
    }

    const handleClickThirdColor = () => {
        setThirdColor(true)
        setFirstColor(false)
        setSecondColor(false)
    }

    let toggleFirstColor = firstColor ? 'active-color' : 'inactive-color'
    let toggleSecondColor = secondColor ? 'active-color' : 'inactive-color'
    let toggleThirdColor = thirdColor ? 'active-color' : 'inactive-color'

    return (
        <section className='settings-container-color'>
            <h3 className='settings-container-color-title'>
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