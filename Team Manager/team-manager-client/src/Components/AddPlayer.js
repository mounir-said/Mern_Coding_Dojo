import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPlayer() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (name.length < 2) errors.name = 'Name must be at least 2 characters long';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    axios.post('http://localhost:1337/players/add', { name, position })
      .then(() => navigate('/players/list'))
      .catch(error => console.error('Error adding player:', error));
  };

  return (
    <div className="container mt-4">
      <h1>Add Player</h1>
      <div className="mb-3">
        <Link to="/players/list" className="btn btn-primary mr-2">List</Link>
        <Link to="/players/add" className="btn btn-success mr-2">Add Player</Link>
        <Link to="/players/manage" className="btn btn-info mr-2">Manage Players</Link>
        <Link to="/status/game/1" className="btn btn-warning">Manage Player Status</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Position (optional)</label>
          <input
            type="text"
            className="form-control"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!name || name.length < 2}>Add</button>
      </form>
    </div>
  );
}

export default AddPlayer;
