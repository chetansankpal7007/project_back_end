const router = require('express').Router();
const follow = require('../controller/follow-up_controller');

router.get('/get-follow-up', follow.getFollowUp);

router.post('/add-follow-up', follow.follow_up_Add);
router.post('/get-follow-up-by-cust', follow.getFollowUpByCust);
router.post('/update-follow-up', follow.updateFollowUp);

module.exports = router;