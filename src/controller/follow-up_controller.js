const mongoose = require('mongoose');
const follow_up = require('../modules/followup_module');

const getFollowUp = async (req, res) => {
    try {
        const follow_up_list = await follow_up.find({});
        res.status(200).json(follow_up_list);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const follow_up_Add =  async (req, res) => {    
    try{
        let data = req.body;
        console.log('data', data);
        await follow_up.create(data);
        let msg = { 'msg': "follow up add"};
        res.status(200).send(msg);

    } catch (error){
        res.status(500).send(error.message);
    }
}


const getFollowUpByCust = async (req, res) => {
    try {
        const follow_up_list = await follow_up.find({c_id: req.body.c_id});
        res.status(200).json(follow_up_list);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getFollowUp,
    follow_up_Add,
    getFollowUpByCust
}