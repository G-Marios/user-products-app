const Product = require('../models/product.model');
const mongoose = require('mongoose');

exports.findAll = async (req, res) => {
    console.log('Find all products');

    try {
        const result = await Product.find();
        res.status(200).json({ status: true, data: result });
        console.log('Success in reading all products');
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log('Problem in reading all products');
    }
};

exports.findOne = async (req, res) => {
    const productId = req.params.id;
    const objectId = new mongoose.Types.ObjectId(productId);

    console.log('Find a product using its id');

    try {
        const result = await Product.findById(objectId);
        res.status(200).json({ status: true, data: result });
        console.log('Success in reading a product using its id');
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log('Problem in reading a product using its id');
    }
};

exports.create = async (req, res) => {
    console.log('Create a new product');

    const newProduct = new Product({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    });
    try {
        const result = await newProduct.save();
        res.status(200).json({ status: true, data: result });
        console.log('Success in creating a product');
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log('Problem in creating a product');
    }
};

exports.update = async (req, res) => {
    const productId = req.params.id;
    const objectId = new mongoose.Types.ObjectId(productId);

    const updateProduct = {
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    };
    console.log(updateProduct);
    console.log("Update a product using it's id");

    try {
        const result = await Product.findByIdAndUpdate(
            objectId,
            updateProduct,
            { new: true }
        );
        console.log(result);
        res.status(200).json({ status: true, data: result });
        console.log('Success in updating a product');
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log('Problem in updating a product using its id');
    }
};

exports.delete = async (req, res) => {
    const productId = req.params.id;
    const objectId = new mongoose.Types.ObjectId(productId);

    try {
        const result = await Product.findByIdAndDelete(objectId);
        res.status(200).json({ status: true, data: result });
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log('Problem in deleting a product using its id');
    }
    console.log('Delete a product using its id');
};
