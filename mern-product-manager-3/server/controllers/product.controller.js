const Product = require('../models/product.model');

const createProduct = async (req, res) => {
    try {
        const { title, price, description } = req.body;
        const newProduct = new Product({ title, price, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update product
const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
};

// Delete product
const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.status(400).json(err));
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct};
