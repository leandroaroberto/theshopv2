import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header'

const Cart = ({lang}) => {
    return (
        <>
            <Header 
                lang={lang} 
                showSearch={false} 
                headerImage=""
                headerBr="Carrinho"
                headerUs="Cart"
                headerImage="shopCart.png"
            />
            <div className="container">
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
            </div>
        </>
    )
}

export default Cart;