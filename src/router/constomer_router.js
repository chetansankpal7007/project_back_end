const cust = require("../controller/customer_controller");
const router = require('express').Router();

router.post('/add-cust', cust.custAdd);

module.exports = router;