import React from 'react'

const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div>
            <h1>Flexbox Crash Course</h1>
            <p>
              This crash course was created by Brad Traversy to help you learn the
              basics of flexbox. Flexbox is a very important and useful tool in
              CSS.
            </p>
          </div>
          <img src="https://traversymedia.com/images/grid.svg" alt="" />
        </div>
      </header>
    )
}

export default Header;