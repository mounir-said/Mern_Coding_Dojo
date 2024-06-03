import React from 'react';

const FetchPoke = ({ poke, setPoke }) => {

  const fetchPk = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => response.json())
          .then(response => { setPoke(response.results.map(pkm => pkm.name)) })
          .catch(err => { console.log(err) });
      console.log("pokemon desde fecth: " + poke);
  }

  return (
      <div className="mt-3">
        <button className="btn btn-primary" onClick={fetchPk}>Fetch Pokemon</button>
      </div>
  );
}

export default FetchPoke;
