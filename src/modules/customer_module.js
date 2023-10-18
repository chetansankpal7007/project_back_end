const mongoose = require('mongoose');

const custSchema = mongoose.Schema(
    {
        c_id: {
            type: Number,
            rrequired : [ true , "Please Enter Customer Id"]
        },
        c_name: {
            type: String,
            rrequired : [ true , "Please Enter Customer Name"]
        },
        c_contact_no: {
            type: String,
            rrequired : [ true , "Please Enter Customer Contact Number"]
        },
        c_email: {
            type: String,
            rrequired : false
        },
        p_id: {
            type: String,
            rrequired : [ true , "Please Select Product"]
        },
        p_name: {
            type: String,
            rrequired : [ true , "Please Select Product"]
        },
        c_price: {
            type: Number,
            rrequired : [ true , "Please Enter Price"]
        },
        e_id: {
            type: String,
            rrequired : [ true , "Please Select Emp"]
        },
        e_name: {
            type: String,
            rrequired : [ true , "Please Select Emp"]
        },
        c_desc: {
            type: String,
            rrequired : [ true , "Please Enter Description"]
        },
        cs_date: {
            type: String,
            rrequired : [ true , "Please Enter Date"]
        },
    }, {
        timestamps: true
    }
)

const cust = mongoose.model('customer', custSchema);

module.exports = cust;