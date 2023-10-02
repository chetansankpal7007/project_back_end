const mongoose = require('mongoose');

const follow_upShema = mongoose.Schema(
    {
        f_id: {
            type: Number,
            required: [true, "Please Enter Follow up id"]
        }, 
        c_id : {
            type: Number,
            required: [true, "Please Select Customer"]
        },
        f_date: {
            type: String,
            required: [true, "Please Select Date"]
        },
        f_type: {
            type: String,
            required: [true, "Please Select Date"]
        },
        f_status: {
            type: String,
            required: [true, "Please Select Status"]
        },
        f_desc: {
            type: String,
            required: false
        }
    }, 
    {
        timestamps: true
    }
)

const follow_up = mongoose.model('follow_up', follow_upShema);

module.exports = follow_up;