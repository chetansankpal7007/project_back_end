const router = require('express').Router();
const emp = require('../controller/emp_controller');

router.get('/get-emp', emp.getEmp);

router.post('/add-emp', emp.empAdd);
router.post('/emp-login', emp.epm_login)

module.exports = router;