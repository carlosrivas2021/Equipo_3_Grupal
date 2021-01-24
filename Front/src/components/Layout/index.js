import React from "react";
import { Container, Movile, ContainerNavbar, Pages } from "./style";
import NavbarComponent from "../../components/navbar/navbar";


const Layout = ({ children }) => {
    return (
        <Container>
            
            <Movile>
                <ContainerNavbar>
                    <NavbarComponent/>
                </ContainerNavbar>
                <Pages> 
                    { children }
                </Pages>
            </Movile>
        </Container>
    )
}

export default Layout;