import React from "react";
import IconExit from "../Icons/IconExit";
import { LogoutBtn } from './style'
export const Logout = () => {
    return (
        <LogoutBtn>
            <IconExit width="25" heigth="25" storke="#000" />
        </LogoutBtn>
    )
}

export default Logout;