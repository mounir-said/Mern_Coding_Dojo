import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(() => navigate('/products/' + id))
            .catch(err => console.error(err));
    }

    return (
        <div className="container mt-5">
            <h2>Edit Product</h2>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea 
                        name="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
}

export default ProductEdit;
