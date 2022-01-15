// hook.js - Route that handles AlertManager calls

var fingerprints = []; // fingerprints[fingerprintId]

function addFingerprint(fingerprintId, thread){
    fingerprints[fingerprintId] = thread;
}

function getThread(fingerprintId){
    if (fingerprints_ === undefined || Object.keys(fingerprints).length === 0) return undefined;
    return fingerprints[fingerprintId];
};

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
    logger.info("HOOK")
    logger.info("Body", req.body[0]);
    logger.info("Alert conts", req.body.alerts.length);
    if (req.body.alerts.length >= 0){
        req.body.alerts.map((a, i)=>{
            logger.info(`Alert ${i}: `, a.fingerprint);
            addFingerprint(a.fingerprint, "Thread id")
        })
    };
    if (fingerprints_ !== undefined || Object.keys(fingerprints).length >= 0) fingerprints.map(f => console.log(f));
    res.send('Hook post');
})

module.exports = router;