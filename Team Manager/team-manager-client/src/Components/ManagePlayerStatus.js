import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ManagePlayerStatus() {
  const { gameId } = useParams();
  const [players, setPlayers] = useState([]);
  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    axios.get('http://localhost:1337/players/list')
      .then(response => {
        const playersData = response.data;
        setPlayers(playersData);
        const initialStatuses = {};
        playersData.forEach(player => {
          initialStatuses[player._id] = 'Undecided';
        });
        setStatuses(initialStatuses);
      })
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  const updateStatus = (playerId, status) => {
    setStatuses(prevStatuses => ({
      ...prevStatuses,
      [playerId]: status
    }));
  };

  return (
    <div className="container mt-4">
      <h1>Player Status - Game {gameId}</h1>
      <div className="mb-3">
        <Link to="/players/list" className="btn btn-primary mr-2">Manage Players</Link>
        <Link to={`/status/game/${gameId}`} className="btn btn-warning">Manage Player Status</Link>
      </div>
      <div className="mb-3">
        <Link to="/status/game/1" className="btn btn-outline-secondary mr-2">Game 1</Link>
        <Link to="/status/game/2" className="btn btn-outline-secondary mr-2">Game 2</Link>
        <Link to="/status/game/3" className="btn btn-outline-secondary">Game 3</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>
                <button
                  className={`btn mr-2 ${statuses[player._id] === 'Playing' ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => updateStatus(player._id, 'Playing')}
                >
                  Playing
                </button>
                <button
                  className={`btn mr-2 ${statuses[player._id] === 'Not Playing' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => updateStatus(player._id, 'Not Playing')}
                >
                  Not Playing
                </button>
                <button
                  className={`btn ${statuses[player._id] === 'Undecided' ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => updateStatus(player._id, 'Undecided')}
                >
                  Undecided
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagePlayerStatus;
