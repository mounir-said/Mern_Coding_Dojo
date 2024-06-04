import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:5000/api/authors/${id}`)
            .then(() => setAuthors(authors.filter(author => author._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1 className="my-4">Authors</h1>
            <Link className="btn btn-primary mb-4" to="/authors/new">Add New Author</Link>
            <h2>We have quotes by :</h2>
            <ul className="list-group">
                {authors.map(author => (
                    <li key={author._id} className="list-group-item">
                        {author.name}
                        <Link to={`/authors/edit/${author._id}`} className="btn btn-sm btn-outline-primary ml-2">Edit</Link>
                        <button onClick={() => deleteAuthor(author._id)} className="btn btn-sm btn-outline-danger ml-2">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuthorList;
