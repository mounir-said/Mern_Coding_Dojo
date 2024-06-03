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

module.exports = { createProduct };
