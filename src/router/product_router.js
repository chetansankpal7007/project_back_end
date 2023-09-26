const router = require('express').Router();
const prod = require('../controller/product_controller');

router.get('/get-product', prod.getProd);

router.post('/add-product', prod.addProd);

module.exports = router;