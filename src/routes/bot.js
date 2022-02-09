// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Whelcome to /bot gChatPromAlerts');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

/// From Google Chat ///
var fireEvent = (event, body) => {
    // ON_ADDED_TO_SPACE
    onAddedToSpace = (body) => {
        console.log("onAddedToSpace");
        return "onAddedToSpace";
    };
    // ON_REMOVED_FROM_SPACE
    onRemovedFromSpace = (body) => {

    };
    // MESSAGE
    onMessage = (body) => {
        var execCommand = (command) => { 
            let commands = {
        
            };
            let notACommand = () => {
                
            };
        
            return command? commands[command]() : notACommand();
        };
        
    };

    notAEvent = () => {
        throw 'Event type undefined or not supported';
    };

    var events = {
        ON_ADDED_TO_SPACE: onAddedToSpace,
        ON_REMOVED_FROM_SPACE: onRemovedFromSpace,
        MESSAGE: onMessage
    };

    return event? events[event](body) : notAEvent();
};


router.post("/", (req, res) => {
    var a = fireEvent(req.body.type, req.para.body);
    res.send(a);
});

router.get("/test/:type", (req, res) => {
    var a = fireEvent(req.params.type, req.body);
    res.send(a);
});

module.exports = router;