import React, { useEffect, useState } from "react";
import {SkillComponent, CoursesComponent} from './components';
import useUser from '../../hooks/useUser';
import useData from '../../hooks/useAll';
import './panel_style.css';

const Panel = () => {
    
    const { data_api } = useData('https://betterlinkedin.herokuapp.com/api/me/skill');
    const { user } = useUser();
    const [skills, setSkills] = useState([]);
    useEffect(() => {
           if(data_api?.data){
               setSkills(data_api.data);
           }
    }, [skills, data_api]) 
    const items = skills.map((item, i) => {
        return SkillComponent(item.name, item._id, i)
    });
    return (
            <div className="panel">
                <div className="box box-panel-user">
                    <img src="https://avatars.githubusercontent.com/u/57513207?s=460&u=661f478c67541b0055ba2a0078c47c2214f35758&v=4" alt=""/>
                    <p>NOMBRE: {user.name }</p>
                    <p>ID: {user._id}</p>
                    <p>CORREO:  {user.email} </p>
                    <p>CREADA: {user.created_at}</p>
                    <button className="btn-rounded green">CONFIGURAR
                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(13 9)"><path d="m.5 8.5 4-4-4-4"/><path d="m4.5 8.5 4-4-4-4"/></g></svg>
                    </button>
                </div>
                <div className="box box-panel-skills">
                    <h1 className="inline-item">habilidades</h1>
                    <button className="btn-rounded green inline-item">
                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><path d="m.5 9v3.5c0 1.1045695.8954305 2 2 2h7c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-3.5" transform="matrix(0 1 -1 0 15 3)"/><path d="m11.5.5v6"/><path d="m11.5.5v6" transform="matrix(0 1 -1 0 15 -8)"/></g></svg>
                    </button>

                    {
                        items
                    }
                    
                </div>
                <div className="box box-panel-courses">
                    <h1>cursos</h1>
                </div>
                
            </div>
    )
}

export default Panel;