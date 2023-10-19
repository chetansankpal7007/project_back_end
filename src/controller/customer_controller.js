const cust = require('../modules/customer_module');
const mongoose = require('mongoose');

const custAdd =  async (req, res) => {    
    try{
        let data = req.body;
        let createdData =  await cust.create(data);
        let msg = { 'msg': "customer created", 'data': createdData};
        res.status(200).send(msg);
    } catch (error){
        res.status(500).send(error.message);
    }
}

const getCust = async(req, res) =>  {
    try {

        let data = await cust.find({});
        res.status(200).send(data);
    } catch (error){
        res.status(500).send(error.message);
    }
}

const getCustById = async(req, res) =>  {
    try {
        let data = await cust.findById(req.body.id);
        res.status(200).send(data);
    } catch (error){
        res.status(500).send(error.message);
    }
}

module.exports = {custAdd, getCust, getCustById};