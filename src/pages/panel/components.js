
export function SkillComponent(title, time, index){
    return(
        <section>
            <div className="inline-item">
                <p>{title}</p>
                <p>{time}</p>
            </div>
            <button className="btn-rounded red inline-item not-margin"> 
                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 4)"><circle cx="8.5" cy="8.5" r="8"/><g transform="matrix(0 1 -1 0 17 0)"><path d="m5.5 11.5 6-6"/><path d="m5.5 5.5 6 6"/></g></g></svg>                        
            </button>
        </section>
    )
}
export function CoursesComponent(title, description)
{
    return(
        <setion>
            <div className="inline-item">
                <p>Curso Javascript + Firebase</p>
                <span> Este curso trata sobre Javascript para trabajar en el front end, haciendo peticiones a firebase, mas datos asdasdasdasdasdas</span>
                <p className="align-center">
                    <svg height="21" viewBox="0 0 21 21" width="41" xmlns="http://www.w3.org/2000/svg"><path d="m.5 5.5 3 3 8.028-8" fill="none" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 6)"/></svg>
                </p>
            </div>              
        </setion>
    )
}