const mongoose = require('mongoose');
const prod = require('../modules/product_module');

const getProd = async (req, res) => {
    try {
        const prodList = await prod.find({});
        res.status(200).json(prodList);
    } catch(error) {
        res.status(500).json(error.message);
    }
}

const addProd =  async (req, res) => {
    try {
        let data = req.body;
        await prod.create(data);
        let msg = { 'msg': "Product Added"};
        res.status(200).send(msg);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getProd, addProd
}