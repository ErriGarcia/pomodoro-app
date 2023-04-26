import logo from '../images/logo.svg'

const Header = () => {
    return (
        <header className='main-header'>
            <img className='main-header-logo' src={logo} alt="logo" />
        </header>
    )
}

export default Header