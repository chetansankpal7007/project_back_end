const cust = require('../modules/customer_module');
const mongoose = require('mongoose');

const custAdd =  async (req, res) => {    
    try{
        let data = req.body;
        await cust.create(data);
        let msg = { 'msg': "customer created"};
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

module.exports = {custAdd, getCust};