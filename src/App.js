import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Resultado from './Resultado';
import Button from './Button';
import Logo from './Logo';

const App = () => {
    const [dados, setDados] = React.useState(null);
    const [game, setGame] = React.useState('megasena');
    const [concurso, setConcurso] = React.useState(null);
    const res = React.useRef();

    async function getConcurso(game) {
        const verifica = concurso ? concurso : '';

        const resp = await fetch(`https://servicebus2.caixa.gov.br/portaldeloterias/api/${game}/${verifica}`);
        const json = await resp.json();

        setDados(json);
    }

    React.useEffect(() => {

        if (game)
            getConcurso(game);

    }, [game, concurso]);

    return (
        <div className='container'>
            <Logo game={game} />
            <Button setGame={setGame} setConcurso={setConcurso} />
            <Resultado dados={dados} setConcurso={setConcurso} />
        </div>
    )
}

export default App;
