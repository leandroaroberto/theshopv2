import React from 'react'
import { Link } from "react-router-dom";

const Login = ({lang}) => {
    return (
        <div>
            <h1>Login page</h1>
            <Link to="/">Go to the home page</Link>
        </div>
    )
}

export default Login;