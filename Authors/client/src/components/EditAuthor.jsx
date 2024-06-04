import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then(res => setName(res.data.name))
            .catch(err => setError("We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/authors/${id}`, { name })
            .then(() => navigate('/authors'))
            .catch(err => setError(err.response.data.error));
    };

    const handleUpdateAuthor = () => {
        axios.put(`http://localhost:5000/api/authors/${id}`, { name })
            .then(() => navigate('/authors'))
            .catch(err => setError(err.response.data.error));
    };
    const handleReset = () => {
      setName('');
      setError('');
    };
    return (
        <div className="container">
            <Link to="/authors" className="btn btn-secondary mb-3">Home</Link>
            <h1 className="my-4">Edit This Author</h1>
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
                <button type="submit" className="btn btn-primary" onClick={handleUpdateAuthor}>Submit</button>
                <button type="button" className="btn btn-secondary ml-2" onClick={handleReset}>Cansel</button>
            </form>
        </div>
    );
};

export default EditAuthor;
