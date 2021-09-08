// hook.js - Route that handles AlertManager calls

var express = require('express');
const logger = require('../helpers/logger');
var router = express.Router();

router.use(express.json());

// Home page route.
router.get('/', function (req, res) {
    res.sendStatus(200);
})

// About page route.
router.post('/', function (req, res) {
    logger.info("Response", req.body.alerts[0]);
    res.send('Hook post');
})

module.exports = router;