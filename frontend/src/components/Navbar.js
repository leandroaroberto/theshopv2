import React from 'react'
import TopMenu from './TopMenu'
import Logo from './Logo'

const Navbar = ({lang, toggleLang }) => {
    return (
        <nav className="navbar">
        <div className="container">
            <Logo />
            <TopMenu lang={lang} toggleLang={toggleLang}/>
        </div>
      </nav>
    )
}


export default Navbar;