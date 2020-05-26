import React, { Fragment } from 'react';

const Cancion = ({letra}) => {
    // este if es para que no cargue el titulo sin contenido
    //este justamente aplica cuando lo que retorna es un string y es para saber si viene vacio o no
    if(letra.length === 0) return null;

    return(
            <Fragment>
                <h2>Letra Canción</h2>
                <p className="letra">{letra}</p>
            </Fragment>
    );
}

export default Cancion;