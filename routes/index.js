const express = require('express');
const router = express.Router();

router.use('/user', require('./auth.js'));
router.use('/ride', require('./ride.js'));

module.exports = router;