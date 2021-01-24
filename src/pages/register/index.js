import React, { useState, useEffect }  from "react";
import { useHistory } from 'react-router-dom';
import Input from "../../components/Inputs/Input"
import IconEmail from "../../components/Icons/IconEmail"
import IconUser from "../../components/Icons/IconUser"
import IconLock from "../../components/Icons/IconLock"
import { Fetching } from "../../services/Fetching/Fetching";
import useUser from "../../hooks/useUser";
import { LoginContainer, Title, BtnLogin, Alert } from '../login/style'

export default function Register () {
    const history = useHistory();
    const { user } = useUser();
    useEffect(() => {
        if(user.authentication) {
            history.push('/panel')
        }
    }, [user])
    const [userR, setUserR] = useState({
        msg: '',
        status: 'false'
    })
    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        c_password: ''
    });
    const handlerData = () => {
        Fetching('https://betterlinkedin.herokuapp.com/api/auth/register',{
            method: 'POST',
            body: register
        })
        .then(data => {
            console.log(data)
            if(data.success) {
                setUserR({
                    ...user,
                    msg: 'Usuario creado con exito',
                    status: 'true'
                });
                history.push('/');
            } else {
                setUserR({
                    ...user,
                    msg: "Debe completar todos los campos",
                    status: 'false'
                });
            }
        })
    }
    return (
        <>
            <LoginContainer>
                { userR.msg && <Alert status={userR.status}> { userR.msg } </Alert> }
                <Title> Registrate </Title>
                <div>
                    <Input type="text" name="name" placeholder="name" handlerValue={setRegister}>
                        <IconUser width="25" heigth="25" stroke="#000" />
                    </Input>
                    <Input type="text" name="email" placeholder="Email" handlerValue={setRegister}>
                        <IconEmail width="25" heigth="25" stroke="#000" />
                    </Input>
                    <Input type="password" name="password" placeholder="Password" handlerValue={setRegister}>
                        <IconLock width="25" heigth="25" stroke="#000" />
                    </Input>
                    <Input type="password" name="c_password" placeholder="Confirmar password" handlerValue={setRegister}>
                        <IconLock width="25" heigth="25" stroke="#000" />
                    </Input>
                    <BtnLogin onClick={handlerData} >Registrarse</BtnLogin>
                </div>
            </LoginContainer>
        </>
    )    
};