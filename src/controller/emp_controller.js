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

const epm_login =  async (req, res) => {    
    try{
        let data = req.body;      
        console.log("data -", data)
        let empData = await emp.find({emp_email: data.email, emp_password: data.password });
        console.log(empData);
        if(empData.length > 0) {
            let msg = { 'msg': "emp Login"};
            res.status(200).send(empData);
        } else {
            let msg = { 'msg': "Please check user name password"};
            res.status(401).send(msg);
        }
    } catch (error){
        res.status(500).send(error.message);
    }
}




module.exports = {
    getEmp,
    empAdd,
    epm_login
}