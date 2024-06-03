import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
