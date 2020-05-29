var express = require('express');
var router = express.Router();

const {getAllEvents, addEvent} = require('../controllers/events')

const app = express()

// Routes related to event

router.get("/", getAllEvents);
router.post("/", addEvent);


module.exports = router;