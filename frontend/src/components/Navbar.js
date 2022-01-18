import React from 'react'
import TopMenu from './TopMenu'
import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="container">
            <Logo />
            <TopMenu />
        </div>
      </nav>
    )
}


export default Navbar;