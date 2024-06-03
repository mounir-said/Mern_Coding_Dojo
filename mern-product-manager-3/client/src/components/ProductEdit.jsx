import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductEdit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/products/${id}`, product)
            .then(() => navigate(`/products/${id}`))
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={product.title} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea 
                        name="description" 
                        value={product.description} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
};

export default ProductEdit;
