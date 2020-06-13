import React, {Fragment} from 'react';
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      <h2>Administrador de Pacientes</h2>
      <diV className="container">
        <div className="row">

          <div className="one-half column">
            <Formulario />
          </div>
          
          <div className="one-half column">
            2
          </div>
          
        </div>
      </diV>
    </Fragment>
  );
}

export default App;
