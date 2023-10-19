const router = require('express').Router();
const follow = require('../controller/follow-up_controller');

router.get('/get-follow-up', follow.getFollowUp);

router.post('/add-follow-up', follow.follow_up_Add);
router.post('/get-follow-up-by-cust', follow.getFollowUpByCust);

module.exports = router;