import React from 'react'

const Header = ({lang}) => {
    return (
        <header className="header">
        <div className="container">
          <div>
            <h1>{lang == 'BR' ? 'Encontre seu produto' : 'Find your product'}</h1>
            <input type="text"/>
          </div>
          <img src="header/shopCart.png" alt="" />
        </div>        
      </header>
    )
}

export default Header;