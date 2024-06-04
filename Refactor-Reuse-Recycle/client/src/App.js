import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App container">
                <h1 className="mt-4">Product Manager</h1>
                <Routes>
                    <Route path="/" element={<><CreateProduct /><ProductList /></>} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/products/:id/edit" element={<ProductEdit />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
