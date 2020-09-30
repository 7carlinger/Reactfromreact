import React, { useState } from 'react';
import meme from './meme.jpg';
import './Showpic.css'

const Showpic = () => {

    const [showPicture, setShowPicture] = useState(false);

    const verFoto = () => {
        setShowPicture(!showPicture);
    };
    return (
        <section className="App-Pic">       
            <h3>y...cómo te sientes?</h3>
            <div> 
                {showPicture ? <img src={meme}/> : "-.-"} 
            </div>
            <button onClick={verFoto}>Velo aqui</button> 
        </section>       
    );
};

export default Showpic

/**
 * Hacer un hook que me permita manejar un booleano
 * Este hook tiene que devolverme el valor booleano
 * y una funcion que se llame toggleValue. La funcion
 * debe cambiar al estado contrario. El hook debe tomar
 * como parametro el primer valor que queremos para nuestro
 * booleano.
 * Tambien debera ser aplicado a dos componentes
 * 1. Un componente que, con un boton, me muestre una 
 * imagen o la oculte.
 * 2. Otro componente con un checkbox y un input de texto. 
 * El checkbox debe permitirme deshabilitar el input.
 */