var express = require('express');
var router = express.Router();

const {getAllEvents, addEvent, getByActor} = require('../controllers/events')

const app = express()

// Routes related to event

router.get("/", getAllEvents);
router.get("/actors/:actorID", getByActor);
router.post("/", addEvent);


module.exports = router;