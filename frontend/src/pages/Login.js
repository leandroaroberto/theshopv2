import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
            <section className="formLogin">
                <div className="container">
                    <Box
                        className="formBox"
                        component="form"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                //error
                                id="email"
                                label="E-mail"
                                defaultValue=""
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                //error
                                id="password"
                                label={lang == 'BR' ? 'Senha' : 'Password'}
                                defaultValue="" 
                                type="password"                             
                                fullWidth
                            />
                        </div>
                        <div>
                            <Button variant="contained" className="button">Login</Button>
                        </div>   
                        <div>
                            <Button variant="outlined" className="button">{lang == 'BR' ? 'Não tenho cadastro' : 'Register'}</Button>
                        </div>                 
                    </Box>
                </div>
            </section>            
        </>
    )
}

export default Login;