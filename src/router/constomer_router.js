const cust = require("../controller/customer_controller");
const router = require('express').Router();

router.post('/add-cust', cust.custAdd);

router.get('/get-cust', cust.getCust);

module.exports = router;