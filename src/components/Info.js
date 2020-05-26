import React from 'react';

const Info = ({info}) => {

    // Al igual que el if que esta en el component cancion
    //este retorna un objeto, por lo tanto la sintaxis cambia para saber si un objeto viene vacio o no
    if(Object.keys(info).length === 0) return null;

    //Al hacer el destructing de los datos que queremos, nos ayuda que al momento de relacionarlo en el codigo, 
    //no se tenga que poner, ejemplo: {info.imagen}, si no solo {imagen}
    const {strArtistThumb, strBiographyES, strArtistLogo, strCountry, strGenre, strStyle, strArtistBanner} = info;



    //si el resultado de la consulta viene vacia, no retornara nada, pero si tiene algo entonces ejecutara lo siguiente
    return(

        <div className="card border-light">
            <img className="card-img m-0 p-0" src={strArtistBanner} alt="banner" />

            <div className="card-header bg-primary text-light font-weight-bold"> 
                <h3>Información Artista <img src={strArtistLogo} className="w-25 h-50" alt="logo" /></h3>
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista"/>
                <p className="card-text font-weight-bold">Género: {strGenre}</p>
                <p className="card-text">País: {strCountry}</p>
                <p className="card-text">Estilo: {strStyle}</p>
                <h2 className="card-text">Biografía: </h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                    <a href={`${info.strWebsite}`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Info;