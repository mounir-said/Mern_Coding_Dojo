const { Product } = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({ title, price, description })
        .then(newProduct => res.status(201).json(newProduct))
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports.getProducts = (req, res) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports.getProductById = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => {
            if (!product) return res.status(404).json({ error: 'Product not found' });
            res.status(200).json(product);
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.status(400).json(err));
};

