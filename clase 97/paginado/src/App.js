import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader.js';
import Index from './pages/Index/index.js';
import Pagina2 from './pages/Pagina2/Pagina2.js'
import Pagina3 from './pages/Pagina3/Pagina3.js';
import './App.scss';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <MainHeader/>
          <Switch>
            <Route exact path='/'>
              <Index />
            </Route>  
            <Route exact path='/pagina2' component={Pagina2}/>
            <Route exact path='/pagina3/:id' component={Pagina3}/>
          </Switch>
      </BrowserRouter>
    </Fragment>
    
    
  );
}

export default App;
