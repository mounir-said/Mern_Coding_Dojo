import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProduct = { title, price, description };
            await axios.post('http://localhost:5000/api/products', newProduct);
            setTitle('');
            setPrice('');
            setDescription('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h2>Create Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter product title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter product price"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Create Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;

