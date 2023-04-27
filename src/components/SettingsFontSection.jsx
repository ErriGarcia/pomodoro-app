import { useState } from 'react'

const SettingsFontSection = () => {

    const [firstFont, setFirstFont] = useState(true)
    const [secondFont, setSecondFont] = useState(false)
    const [thirdFont, setThirdFont] = useState(false)
    
    const [classFirstFont, setClassFirstFont] = useState('kumbh-sans-font')
    const [classSecondFont, setClassSecondFont] = useState('')
    const [classThirdFont, setClassThirdFont] = useState('')

    const handleClickFirstFont = () => {
        setFirstFont(true)
        setSecondFont(false)
        setThirdFont(false)
        setClassFirstFont('kumbh-sans-font')
        setClassSecondFont('')
        setClassThirdFont('')
    }

    const handleClickSecondFont = () => {
        setSecondFont(true)
        setFirstFont(false)
        setThirdFont(false)
        setClassSecondFont('roboto-slab-font')
        setClassFirstFont('')
        setClassThirdFont('')
    }

    const handleClickThirdFont = () => {
        setThirdFont(true)
        setFirstFont(false)
        setSecondFont(false)
        setClassThirdFont('space-mono-font')
        setClassFirstFont('')
        setClassSecondFont('')
    }

    let toggleFirstFont = firstFont ? 'active-font' : 'inactive-font'
    let toggleSecondFont = secondFont ? 'active-font' : 'inactive-font'
    let toggleThirdFont = thirdFont ? 'active-font' : 'inactive-font'

    let updateFirstFont = classFirstFont ? 'kumbh-sans-font' : ''
    let updateSecondFont = classSecondFont ? 'roboto-slab-font' : ''
    let updateThirdFont = classThirdFont ? 'space-mono-font' : ''
    
    return (
        <section className='settings-container-font'>
            <h3 className={`settings-container-font-title ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
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