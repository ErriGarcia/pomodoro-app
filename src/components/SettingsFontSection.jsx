const SettingsFontSection = ({firstFont, secondFont, thirdFont, handleClickFirstFont, handleClickSecondFont, handleClickThirdFont, updateFirstFont, updateSecondFont, updateThirdFont}) => {

    let toggleFirstFont = firstFont ? 'active-font' : 'inactive-font'
    let toggleSecondFont = secondFont ? 'active-font' : 'inactive-font'
    let toggleThirdFont = thirdFont ? 'active-font' : 'inactive-font'

    
    
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