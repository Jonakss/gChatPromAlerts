// var express = require('express');
var router = express.Router();
router.use(express.json);

//ADDED_TO_SPACE
//MESSAGE
//REMOVED_FROM_SPACE
router.post("/", (req, res) => {
    res.send("From /bot");
});
router.get("/", (req, res) => {
    res.send("From /bot");
});
module.exports = router;