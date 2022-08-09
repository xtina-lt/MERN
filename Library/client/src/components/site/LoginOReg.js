import React from 'react'
import LoginForm from '../users/LoginForm'
import RegisterForm from '../users/RegisterForm'

const LoginOReg = ({setIsLogged}) => {
    return(
        <>
            <RegisterForm setIsLogged={setIsLogged}/>
            <LoginForm setIsLogged={setIsLogged}/>
        </>
    )
}

export default LoginOReg