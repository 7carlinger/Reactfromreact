import React,{ useEffect, useReducer } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import DataContext from './Context/DataContext';
import reducer, {INIT} from './reducer/Reducer';
import {getImg} from './services/Services';


function App() {
  
  const [data, dataDispatch] = useReducer(reducer, []);

  useEffect (() => {
    const promise = getImg();
    promise.then(data => dataDispatch ({ type: INIT, init: data}))
  }, []);
  
  return (
  
    <DataContext.Provider value={{data, dataDispatch}}>

      <Header />
      <Container />

    </DataContext.Provider>
  );
}

export default App;
