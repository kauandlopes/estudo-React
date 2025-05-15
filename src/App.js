import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Form from './components/Forms';

function App() {

 const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador); 
   

  }

  return (
    <div className="App">
      <Banner/>
     <Form aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
    </div>
  );
}

export default App;
