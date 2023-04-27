import { useState } from 'react'

const SettingsFontSection = () => {

    const [firstFont, setFirstFont] = useState(true)
    const [secondFont, setSecondFont] = useState(false)
    const [thirdFont, setThirdFont] = useState(false)

    const handleClickFirstFont = () => {
        setFirstFont(true)
        setSecondFont(false)
        setThirdFont(false)
    }

    const handleClickSecondFont = () => {
        setSecondFont(true)
        setFirstFont(false)
        setThirdFont(false)
    }

    const handleClickThirdFont = () => {
        setThirdFont(true)
        setFirstFont(false)
        setSecondFont(false)
    }

    let toggleFirstFont = firstFont ? 'active-font' : 'inactive-font'
    let toggleSecondFont = secondFont ? 'active-font' : 'inactive-font'
    let toggleThirdFont = thirdFont ? 'active-font' : 'inactive-font'
    
    return (
        <section className='settings-container-font'>
            <h3 className='settings-container-font-title'>
            Font
            </h3>
            <div className='settings-container-font-container'>
                <button 
                    className={`settings-container-font-container-button-1 ${toggleFirstFont}`}
                    onClick={handleClickFirstFont}
                >
                        Aa
                    </button>
                <button 
                    className={`settings-container-font-container-button-2 ${toggleSecondFont}`}
                    onClick={handleClickSecondFont}
                >
                    Aa
                </button>
                <button 
                    className={`settings-container-font-container-button-3 ${toggleThirdFont}`}
                    onClick={handleClickThirdFont}
                >
                    Aa
                </button>
            </div>
        </section>
    )
}

export default SettingsFontSection