import React from 'react';
import './App.css';
import Contador from './components/Contador'
import ListaDeAlumnos from './components/ListaDeAlumnos'
import data from './database/data'

function App() {
   return (
      <div className="App">

         <Contador />
         <hr />
         <ListaDeAlumnos alumnoData={data} />


      </div>
   );
}

export default App;
