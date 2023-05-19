const SettingsFontSection = ({firstFont, secondFont, thirdFont, handleClickFirstFont, handleClickSecondFont, handleClickThirdFont, updateFirstFont, updateSecondFont, updateThirdFont}) => {

    let toggleFirstFont = firstFont ? 'active-font' : 'inactive-font'
    let toggleSecondFont = secondFont ? 'active-font' : 'inactive-font'
    let toggleThirdFont = thirdFont ? 'active-font' : 'inactive-font'

    
    
    return (
        <fieldset className='settings-container-font'>
            <h3 className={`settings-container-font-title ${updateFirstFont} ${updateSecondFont} ${updateThirdFont}`}>
            Font
            </h3>
            <div className='settings-container-font-container'>
                <button 
                    className={`settings-container-font-container-button-1 ${toggleFirstFont}`}
                    onClick={handleClickFirstFont}
                    value={'kumbh-sans-font'}
                >
                    Aa
                </button>
                <button 
                    className={`settings-container-font-container-button-2 ${toggleSecondFont}`}
                    onClick={handleClickSecondFont}
                    value={'roboto-slab-font'}
                >
                    Aa
                </button>
                <button 
                    className={`settings-container-font-container-button-3 ${toggleThirdFont}`}
                    onClick={handleClickThirdFont}
                    value='space-mono-font'
                >
                    Aa
                </button>
            </div>
        </fieldset>
    )
}

export default SettingsFontSection