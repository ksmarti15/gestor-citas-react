import React from 'react';

const Alerta = ({clase, texto}) => {
    return ( 

        <p className={clase}>{texto}</p>

     );
}
 
export default Alerta;