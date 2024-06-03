import React from 'react';

const ShowPoke = ({ poke }) => {
  console.log("poke desde show: ", poke);
  return (
    <div className="mt-4">
      <h2>Pokemons List</h2>
      <ul className="list-group">
        {
          poke.map((pkm, i) => (
            <li key={i} className="list-group-item">{pkm}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default ShowPoke;
