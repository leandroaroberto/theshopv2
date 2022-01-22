import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header'

const Login = ({lang}) => {
    return (               
        <>
            <Header 
                lang={lang} 
                showSearch={false} 
                headerImage=""
                headerBr="Login"
                headerUs="Login"
                headerImage="user.png"                
            />
            <div className="container">
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
            </div>
        </>
    )
}

export default Login;