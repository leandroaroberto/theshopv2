import React from 'react'

const TopMenu = ({lang, toggleLang}) => {
    return (
        <ul className="nav">
            <li>
              <a href="#"><i className="fas fa-shopping-cart"></i>{lang == 'BR' ? 'Carrinho' : 'Cart'}</a>
            </li>
            <li>
              <a href="#"><i className="fas fa-user"></i>Login</a>
            </li>
            <li>
              <a href="#"
                onClick={() => toggleLang(lang == 'BR' ? 'US' : 'BR')}
              >
                {lang == 'BR' ? 'US' : 'BR'}
              </a>
            </li>
          </ul>
    )
}

export default TopMenu;