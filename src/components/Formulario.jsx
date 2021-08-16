import React from 'react'

const Formulario =() => {

    

    const [frutas, setFrutras]= React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) =>{
        e.preventDefault();
        

        if(!frutas.trim()){
            console.log('esta vacio frutas');
            return
        }

        if(!descripcion.trim()){
            console.log('esta vacio descripcion');
            return
        }

        console.log('procesando datos ...');

        setLista([
            ...lista,
            {frutas , descripcion }
        ])
        
        e.target.reset()
        setFrutras('')
        setDescripcion('')
    }

    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input 
                type="text"
                placeholder= 'Ingrese fruta'
                className= 'form-control mb-2'
                onChange = {(e) => setFrutras(e.target.value)}
                 />
                <input 
                type="text"
                placeholder= 'Ingrese Descripción'
                className= 'form-control mb-2'
                onChange= {(e)=> setDescripcion(e.target.value)}
                 />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item, index)=> (
                        <li key={index}>
                            {item.frutas} - {item.descripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Formulario