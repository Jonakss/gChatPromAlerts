// hook.js - Route that handles AlertManager calls
const logger = require('../helpers/logger');

var gchat = require('../helpers/googleChatApi.js');
var express = require('express');
var router = express.Router();

router.use(express.json());


// Status
router.get('/', function (req, res) {   
    gchat.sendMessage(process.env.TEST_THREAD, null, null, "prueba")
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        logger.error(error);
        res.sendStatus(500);
    });
})

// Main Entrypoint for Alerts
router.post('/', function (req, res) {
    logger.info("Response", req.body.alerts[0]);
    res.send('Hook post');
})

module.exports = router;