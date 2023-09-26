const mongoose = require('mongoose');

const ProdShema = mongoose.Schema(
    {
        p_id: {
            type: Number,
            required: [true, "Please Enter product id"]
        }, 
        p_name : {
            type: String,
            required: [true, "Please Enter Product Name"]
        },
        p_price: {
            type: Number,
            required: [true, "Please Enter price"]
        },
        p_disc: {
            type: Number,
            required: false,
            default: 0
        },
        p_desc: {
            type: String,
            required: false
        }
    }, 
    {
        timestamps: true
    }
)

const prod = mongoose.model('product', ProdShema);

module.exports = prod;