import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/Authors', { name })
            .then(() => navigate('/authors')) // Navigate back to the author list after adding a new author
            .catch(err => setError(err.response.data.error));
    };

    const handleAddAuthor = () => {
        axios.post('http://localhost:5000/api/Authors', { name })
            .then(() => navigate('/authors')) // Navigate back to the author list after adding a new author
            .catch(err => setError(err.response.data.error));
    };

    const handleReset = () => {
      setName('');
      setError('');
    };

    return (
        <div className="container">
            <Link to="/authors" className="btn btn-secondary mb-3">Home</Link>
            <h1 className="my-4">Add New Author</h1>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Author Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddAuthor}>Submit</button>
                <button type="button" className="btn btn-secondary ml-2" onClick={handleReset}>Cansel</button>
            </form>
        </div>
    );
};

export default AuthorForm;
