import './navbar_style.css'
import {Link} from 'react-router-dom';
import React, {Component} from 'react';


class NavbarComponent extends Component {


    constructor(){
        super()
        this.state = {
            class_navbar : '',
            state_navbar : false
        }
    }
    changeStateButton = () =>{
        this.setState({state_navbar : !this.state.state_navbar});
        if(this.state.state_navbar){
            this.setState({class_navbar : 'active'});
        } else this.setState({class_navbar : ''});
    }
    render(){ 
        return(
            <div className="navbar">
                <button className={'button-icon ' +this.state.class_navbar} onClick={this.changeStateButton}>
                    
                </button>
                <section className={this.state.class_navbar}>
                    <Link>Inicio</Link>
                    <Link>Iniciar sesion</Link>
                    <Link>Registrarse</Link>
                    <Link>Contacto</Link>
                </section>
            </div>
        )
    }
}


export default NavbarComponent;