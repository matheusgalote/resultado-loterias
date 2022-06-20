import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Button = ({ setGame, setConcurso }) => {

    function handle({target}) {
        setGame(target.innerText.toLowerCase());
        setConcurso(null);
    }

    const style = {
        margin: '5px'
    }

    return (
        <div className='d-flex justify-content-center mt-4'>
            <button onClick={handle} className='btn btn-success' style={{margin: '5px'}}>MegaSena</button>
            <button onClick={handle} className='btn btn-warning' style={{margin: '5px'}}>Lotofacil</button>
            <button onClick={handle} className='btn btn-primary' style={{margin: '5px'}}>Quina</button>
            <button onClick={handle} className='btn btn-secondary' style={{margin: '5px'}}>Lotomania</button>
        </div>
    )
}

export default Button