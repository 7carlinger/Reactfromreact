import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
//import { reducer, NAME, ADDRESS, CATEGORY } from './Components/Reducer/Reducer';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <p>
            Tarea de Reducer
          </p>
            <form>
              <input></input>
              <input></input>
              <input></input>
              <button type="button">Add</button>
            </form>  
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;

/*Tarea de esta clase: Crear un nuevo proyecto, donde vamos a tener textos mostrando un state (de un useReducer), que va a ser un objeto de forma:
{ name: "Company Name", address: "Av. San Martin 192", category: "IT" }

Hacer un reducer que me permita editar este objeto. No va a ser un array, solo un objeto. Usar spread operator, y las cases necesarias para editar cada uno de los campos.*/