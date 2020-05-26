import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {

  // definir el state
  const [busquedacancion, guardarBusquedaCancion] = useState ({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState({});
  //const [busquedaartista, guardarBusquedaArtista] = useState ({});

  useEffect(() =>{
    //Este if se usa para determinar si los campos estan vacios
    if(Object.keys(busquedacancion).length === 0 ) return;

    const consultarApiLetra = async () => {
      const {artista, cancion} = busquedacancion;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      //esta forma de consultar api ayuda al performance de la pagina, que la traida de info sea mas rapida
      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

      //guardarLetra(resultado.data.lyrics);

    }
    consultarApiLetra();
    
  }, [busquedacancion, info]);


  return (
    <Fragment>
      <Formulario
        guardarBusquedaCancion = {guardarBusquedaCancion}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Info
              info = {info}
            />

          </div>

          <div className="col-md-6 col-sm-12">
            <Cancion
              letra = {letra}
            />
          </div>

        </div>
      </div>

    </Fragment>
  );
}

export default App;
