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
    //logger.info("Body", req.body[0]);
    logger.info("Alert conts", req.body.alerts.length);
    if (req.body.alerts.length > 0){

        req.body.alerts.map((a, i)=>{
            logger.info(`Alert ${i}: `, a.fingerprint);
        })
    };
    res.send('Hook post');
})

module.exports = router;