const express = require('express');
const router = express.Router();

const disputes = require('./disputes');

router.use('/disputes', disputes);

module.exports = router;
