import React, { Fragment, useState } from 'react'

const Event =() => {
    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick =() =>{
        console.log('me diste click');
        setTexto('cambiando el texto...')
    }

    return(
        <Fragment>
            <hr />
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}>Click</button>
        </Fragment>
    );
}

export default Event