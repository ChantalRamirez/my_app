import React from 'react';

const Variables =() => {
    const saludo =' Hola desde constante';
    const imagen = 'https://www.freejpg.com.ar/image-900/26/26e6/F100007601-ruta.jpg';

    return(
        <div>
           <h2>Nuevo componente{saludo}</h2>
           <img src={imagen} alt='' />
        </div>
    );
}

export default Variables;