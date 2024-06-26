import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import './App.css';

function App() {
    return (
        <div className="App container">
            <h1 className="mt-4">Product Manager</h1>
            <Routes>
                <Route path="/" element={<><ProductForm /><ProductList /></>} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/:id/edit" element={<ProductEdit />} />
            </Routes>
        </div>
    );
}

export default App;
