import React, { useState } from 'react';
import './State.css';

const State = () => {
    const [stateProject, setStateProject] = useState(true);
    
    const compilaNoCompila = () => {
        setStateProject(!stateProject);
    };
    return (
        <section className="App-State">
            <h3>y...cómo está tu proyecto?</h3>
            <h2>{ stateProject ? "Compila!!!" : "Sufre maldita!!!"}</h2>
            <button onClick={compilaNoCompila}>Averigualo</button>
        </section>    
    )
}
export default State

/*no quise usar el nombre toggleValue para la fc que llame State*/