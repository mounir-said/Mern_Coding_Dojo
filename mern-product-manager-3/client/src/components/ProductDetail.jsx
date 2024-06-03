import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
            <Link to={`/products/${product._id}/edit`} className="btn btn-primary ml-2">Edit</Link>
        </div>
    );
};

export default ProductDetail;
