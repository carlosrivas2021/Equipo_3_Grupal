import React, { useState, useEffect } from "react";
import Input from "../../components/Inputs/Input"
import IconEmail from "../../components/Icons/IconEmail"
import IconLock from "../../components/Icons/IconLock"
import { Fetching } from "../../services/Fetching/Fetching";
import { useHistory } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { LoginContainer, Title, BtnLogin, Alert } from './style'
export default function Login () {
    const { user } = useUser();
    useEffect(() => {
        if(user.authentication) {
            history.push('/panel')
        }
    }, [user])
    const history =  useHistory();
    const [response, setResponse] = useState({
        msg: '',
        status: 'false'
    })
    const [login, setlogin] = useState({
        email: '',
        password: ''
    });
    const handlerLogin = () => {
        Fetching('https://betterlinkedin.herokuapp.com/api/auth/login', {
            method: 'POST',
            body: login
        })
            .then((data) => {
                if(!data.success) {
                    setResponse({
                        ...response,
                        msg: 'Credenciales invalidas',
                        status: 'false'
                    })
                }
                if (data.access_token) {
                   localStorage.setItem('token', data.access_token)
                   history.replace('/panel');
                }
            })
    }
    return (
        <>
            <LoginContainer>
                { response.msg && <Alert status={response.status}> { response.msg } </Alert> }
                <Title> Iniciar Sesion </Title>
                <div>
                    <Input type="text" name="email" placeholder="Email" handlerValue={setlogin}>
                        <IconEmail width="25" heigth="25" stroke="#000" />
                    </Input>
                    <Input type="password" name="password" placeholder="Password" handlerValue={setlogin}>
                        <IconLock width="25" heigth="25" stroke="#000" />
                    </Input>
                    <BtnLogin onClick={handlerLogin}>Entrar</BtnLogin>
                </div>
            </LoginContainer>
        </>
    )    
};