// hook.js - Route that handles AlertManager calls
var gchat = require('../helpers/googleChatApi');

var fingerprints = []; // fingerprints[fingerprintId]

function addFingerprint(fingerprintId, thread){
    fingerprints[fingerprintId] = thread;
}

function getThread(fingerprintId){
    if (fingerprints === undefined || Object.keys(fingerprints).length === 0) return undefined;
    return fingerprints[fingerprintId];
};

async function sendAlert(space, thread, alert){};

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
    //logger.debug("Body", req.body);
    if(req.body.alerts){
        logger.debug(`There are ${req.body.alerts.length} alerts.`);
        if (req.body.alerts.length >= 0){
            req.body.alerts.map((a, i)=>{
                logger.info(`Alert ${i}: ${a.fingerprint} - ${a.labels.alertname} (${a.status}) [${a.labels.severity}] on ${a.labels.instance}`);
                if(getThread(a.fingerprint) === undefined) addFingerprint(a.fingerprint, `${a.startsAt}`);
                logger.info(getThread(a.fingerprint));
            })
        };
        if(fingerprints) logger.info(fingerprints.map((f, i) => {logger.info(`${f} : ${fingerprints[i]}`)}));
    }
    res.send('Hook post');
});

router.get('/test/:space/:thread', function(req,res){
    const res = await gchat.newMessage(req.params.thread, req.params.thread, "Test");
    res.send(res);
});

module.exports = router;