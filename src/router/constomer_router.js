const cust = require("../controller/customer_controller");
const router = require('express').Router();

router.post('/add-cust', cust.custAdd);

router.get('/get-cust', cust.getCust);

router.post('/get-cust-by-id', cust.getCustById);

module.exports = router;