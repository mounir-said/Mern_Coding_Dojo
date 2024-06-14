import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:5000/api/products/' + id)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(err => console.error(err));
    };

    const editProduct = (id) => {
        navigate('/products/' + id + '/edit');
    };

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={'/products/' + product._id}>{product.title}</Link>
                        <button onClick={() => deleteProduct(product._id)} className="btn btn-danger ml-2">Delete</button>
                        <button onClick={() => editProduct(product._id)} className="btn btn-primary ml-2">Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
