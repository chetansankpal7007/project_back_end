const mongoose = require('mongoose');
const emp = require('../modules/emp_module');

const getEmp = async (req, res) => {
    try {
        const empList = await emp.find({});
        res.status(200).json(empList);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const empAdd =  async (req, res) => {    
    try{
        let data = req.body;
        console.log('data', data);
        await emp.create(data);
        let msg = { 'msg': "emp created"};
        res.status(200).send(msg);

    } catch (error){
        res.status(500).send(error.message);
    }
}



module.exports = {
    getEmp,
    empAdd
}