// var express = require('express');
var router = express.Router();
router.use(express.json);

router.get("/", (req, res) => {
    res.send("From /");
});

module.exports = router;