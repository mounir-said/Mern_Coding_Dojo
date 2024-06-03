import './App.css';
import { useState } from 'react';
import FetchPoke from './Components/FetchPokemon';
import ShowPoke from './Components/ShowPokemon';

function App() {
    const [poke, setPoke] = useState([]);
    console.log(`Desde app: ${poke}`);

    return (
        <div className="container mt-5">
            <FetchPoke poke={poke} setPoke={setPoke} />
            <ShowPoke poke={poke} />
        </div>
    );
}

export default App;
