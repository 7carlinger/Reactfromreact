import React from 'react';
import './Cat.scss';


const Cat = ({id, url, children}) => {
    


    return (
        <article className="tareaC84">
            <header className="tareaC84--header">
                <h2 className="tareaC84--header--title">The cat random picker</h2>
                
            </header>    
            <p>Alias: {id}</p>
    
            <div className="tareaC84--content"> 
                <img src={url}/>
                {children}
            </div> 
        </article>      
    )
}
export default Cat;