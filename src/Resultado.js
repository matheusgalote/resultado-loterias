import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Concurso from './Concurso';

const Resultado = ({ dados, setConcurso }) => {

    const style = {
        border: '2px solid #ccc',
        margin: '10px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
        fontSize: '2rem',
        fontWeight: 'bold',
    }

    if (dados) {
        return (
            <div className='text-center mt-5'>
                <h3>Concurso: <span className="badge bg-dark">{dados.numero}</span></h3>
                <Concurso setConcurso={setConcurso} numero={dados.numero} />
                {/* <div className='d-flex justify-content-center mt-2'>
                    <button onClick={() => setConcurso(concurso => concurso = dados.numero+1)} className='btn btn-dark' style={{ marginRight: '50px' }}>/</button>
                    <button onClick={() => setConcurso(concurso => concurso = dados.numero-1)} className='btn btn-dark' style={{ marginRight: '0px' }}>\</button>
                </div> */}
                <span>{dados.acumulado ? 'Acumulado' : 'Premiado'}</span>
                <div className='d-flex flex-wrap justify-content-center align-items-center'>
                    {dados.listaDezenas.map(dezena => {
                        return (
                            <span className='badge bg-success' key={dezena} style={style}>{dezena}</span>
                        );
                    })}
                </div>
            </div>
        )
    } else return null;
}

export default Resultado