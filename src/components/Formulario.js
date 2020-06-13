import React, {Fragment, useState} from 'react';
import Alerta from './Alerta.js';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Cita
    const [cita, actualizarCita] = useState({
       mascota:'',
       propietario:'',
       fecha:'',
       hora:'',
       sintomas:''
    });

    const [error, actualizarError] = useState(false);

    //Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        });
    }

    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();
       
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === ''
        || sintomas.trim() === ''){

            actualizarError(true);
            return;
        }

        //Eliminar el mensaje previo
        actualizarError(false);
        
        //Asignar un ID
        cita.id = uuidv4();     

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        });
    }

    return ( 

        <Fragment>
        <div className="card">
            <h4>Crear cita</h4>
            
            <form
            onSubmit={submitCita}
            >
                <label>Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascosta: "
                    onChange={actualizarState}
                    value={mascota}          
                />

                <label>Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño: "     
                    onChange={actualizarState}
                    value={propietario}      
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"       
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width" 
                    onChange={actualizarState}      
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                {error
                    ?
                    <Alerta 
                        clase = 'alerta-error'
                        texto = 'Todos los campos son obligatorios'
                    /> 
                    : 
                    null
                }

                <button
                    type="submit"
                    className="u-full-width button-enviar"
                
                >Agregar cita</button>

            </form>

        </div>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
