import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const pokemonData = response.data.results.map(poke => poke.name);
      setPokemon(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <button className="btn btn-primary" onClick={fetchPokemon} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Pokemon'}
        </button>
      </div>
      <div className="mt-3">
        <h2>Pokemon List</h2>
        <ul className="list-group">
          {pokemon.map((poke, index) => (
            <li key={index} className="list-group-item">{poke}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
