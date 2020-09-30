import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Nav from './components/Nav/Nav';
import State from './components/State/State';
import Showpic from './components/Showpic/Showpic';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Section/>
      <State/>
      <Showpic/>
      <Footer/>
    </div>
  );
}

export default App;
