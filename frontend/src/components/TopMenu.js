import React from 'react'
import { Link } from "react-router-dom";

const TopMenu = ({lang, toggleLang}) => {
    return (
        <ul className="nav">
            <li>
              <Link to="/cart"><i className="fas fa-shopping-cart"></i>{lang == 'BR' ? 'Carrinho' : 'Cart'}</Link>
            </li>
            <li>
              <Link to="/login"><i className="fas fa-user"></i>Login</Link>
            </li>
            <li>
              <a href="#"
                onClick={() => toggleLang(lang == 'BR' ? 'US' : 'BR')}
              >
                <img src={`/icons/${lang == 'BR' ? 'united-states.png' : 'brazil.png'}`}/>
              </a>
            </li>
          </ul>
    )
}

export default TopMenu;