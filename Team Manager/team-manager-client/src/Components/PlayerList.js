import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/players/list')
      .then(response => setPlayers(response.data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  const deletePlayer = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name}?`)) {
      axios.delete(`http://localhost:1337/players/delete/${id}`)
        .then(() => setPlayers(players.filter(player => player._id !== id)))
        .catch(error => console.error('Error deleting player:', error));
    }
  };

  return (
    <div className="container mt-4">
      <h1>Player List</h1>
      <div className="mb-3">
        <Link to="/players/list" className="btn btn-primary mr-2">List</Link>
        <Link to="/players/add" className="btn btn-success mr-2">Add Player</Link>
        <Link to="/players/manage" className="btn btn-info mr-2">Manage Players</Link>
        <Link to="/status/game/1" className="btn btn-warning">Manage Player Status</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deletePlayer(player._id, player.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
