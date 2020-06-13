import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){

    citasIniciales = [];

  }

  //Citas agregadas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas]);

  //Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
  }

  // Función que eliminar una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicial
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <div className="container">
        <h2 className="card bg-pink">Administrador de Pacientes</h2>
        <div className="row">

          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>
          
          <div className="one-half column">
              <h4 className="card">{titulo}</h4>

              {citas.map(cita => (
                <Cita 
                  key = {cita.id}
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />
              ))}

          </div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
