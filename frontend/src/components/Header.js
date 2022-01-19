import React from 'react'

const Header = ({lang}) => {
    return (
        <header className="header">
        <div className="container">
          <div>
            <h1>{lang == 'BR' ? 'Encontre seu produto' : 'Find your product'}</h1>
            <input type="text"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
          </div>
          <img src="https://traversymedia.com/images/grid.svg" alt="" />
        </div>
      </header>
    )
}

export default Header;