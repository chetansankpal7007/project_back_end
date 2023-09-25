const mongoose = require('mongoose');

const empShema = mongoose.Schema(
    {
        emp_id: {
            type: Number,
            required: [true, "Please Enter Emp id"]
        }, 
        emp_name : {
            type: String,
            required: [true, "Please Enter Emp Name"]
        },
        emp_email: {
            type: String,
            required: [true, "Please Enter Emp Email"]
        },
        emp_contact: {
            type: String,
            required: [true, "Please Enter Emp contact"]
        },
        emp_password: {
            type: String,
            required: [true, "Please Enter Emp Password"]
        }, 
        emp_role: {
            type: String,
            required: [true, "Please Enter Emp Role"]
        }
    }, 
    {
        timestamps: true
    }
)

const emp = mongoose.model('emp', empShema);

module.exports = emp;
