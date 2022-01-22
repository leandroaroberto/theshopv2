import React from 'react'

const Header = ({lang, headerBr , headerUs, showSearch = false, headerImage = ""}) => {
    return (
        <header className="header">
        <div className="container">
          <div>
            <h1>
              {lang == 'BR' ? headerBr : headerUs}
            </h1>
            {
              showSearch === true ? <input type="text"/> : ''
            }            
          </div>
          {
            headerImage ? <img src={`header/${headerImage}`} alt="" /> : ''
          }          
        </div>        
      </header>
    )
}

export default Header;