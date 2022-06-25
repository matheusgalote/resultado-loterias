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

        console.log(dados.message)

        if (dados.message != 'Ocorreu um erro inesperado.')
            return (
                <div className='text-center mt-5'>
                    <h3>Concurso: <span className="badge bg-dark">{dados.numero}</span></h3>
                    <Concurso setConcurso={setConcurso} numero={dados.numero} />
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
        else return (
            <div>
                <div className="alert alert-danger mt-5" role="alert">
                    <h3 className="alert-heading">Ocorreu um erro ao buscar por esse concurso.</h3>
                    <h5>Possíveis causas:</h5>
                    <ul className='mt-4'>
                        <li>A API da CAIXA está com problemas.</li>
                        <li>Esse concurso ainda não existe.</li>
                        <li>Um político comeu o dinhero que era pra esse fim.</li>
                    </ul>
                </div>
                <div className='col text-center'>
                    <button className='btn btn-primary' onClick={() => setConcurso('')}>Ver último concurso válido</button>
                </div>
            </div>
        );
    }
}

export default Resultado