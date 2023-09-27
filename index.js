const express = require('express')
const app = express()
const emp = require('./src/router/emp_router');
const product = require('./src/router/product_router')
const customer = require('./src/router/constomer_router');


app.use(express.json());
const mongose = require("mongoose");

app.use('/emp',emp);
app.use('/product', product);
app.use('/customer', customer);


app.get('/', function (req, res) {
  res.send('Hello World')
})



mongose.connect("mongodb://localhost:27017/CRM").then(()=>
{
    app.listen(8090,()=>{
        console.log("node js server strted")
    });
    console.log("connected");
}
).catch(()=>{
    console.log("Not connected");
}); 