import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const CreateProduct = () => {
    const navigate = useNavigate();

    const handleCreate = (newProduct) => {
        axios.post('http://localhost:5000/api/products', newProduct)
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Create Product</div>
                        <div className="card-body">
                            <ProductForm onSubmit={handleCreate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
