import React, { useEffect, useState } from 'react';
import Cat from './Components/Cat/Cat';
import axios from 'axios';
import './App.scss';


const App = () => {
  const [cats, setCats] = useState ([]);
  /*const [id, setId] = useState ([]);*/

  const cargarCat = () => {

  }

  useEffect (() => {
    axios.get("https://api.thecatapi.com/v1/images/search ")
      .then(res => {
        setCats(res.data);
      })
      .catch(err => alert(`Error! ${err}`));
  }, []);


  return (
    <React.Fragment>
      <div className="App" > 
        {
          cats.map(cat => {
            return (
              <Cat key={cat.breeds} id={cat.id} url={cat.url}>
                <button className="btn" onClick={() => cargarCat()}>Elige otro</button>
              </Cat>
            )
          })  
        }
      </div>  
    </React.Fragment>
  );

}

export default App;
/*<Cat key={cat.id} url={cat.url} breeds={cat.breeds} width={cat.width} height={cat.height}>
                
              </Cat>*/