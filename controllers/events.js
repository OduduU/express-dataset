const models = require('../models');
const EventModel = models.Event
const ActorModel = models.Actor
const RepoModel = models.Repo;


var getAllEvents = async (req, res) => {
	try {
		const allEvents = await EventModel.findAll({
			raw: true,
			order: [["id", "ASC"]],
		});
		res.status(200).json(allEvents);
		
	} catch (error) {
		console.log('error: ', error)
	}

};

var addEvent = async (req, res) => {
	try {
		const actor = await ActorModel.findOrCreate({ where: { id: req.body.actor.id }, defaults: req.body.actor })
		const repo = await RepoModel.findOrCreate({ where: { id: req.body.repo.id }, defaults: req.body.repo });
		const event = await EventModel.findAll({ where: { id: req.body.id } });

		if (event.length > 0) {
			res.status(400).json({ message: 'Event already exist' });
			return
		}

		const newEvent = await EventModel.create({
			id: req.body.id,
			event_type: req.body.type,
			actorId: req.body.actor.id,
			repoId: req.body.repo.id,
		});

		res.status(201).json(newEvent)

	} catch (error) {
		console.log('error', error)
	}
};


var getByActor = async (req, res) => {
	try {
		const actor = await ActorModel.findAll({ where: { id: req.params.actorID } });
		if (actor.length === 0) return res.status(404).json({message: 'actor not found'})
		const allEvents = await EventModel.findAll({
			raw: true,
			where: { actorId: req.params.actorID },
			order: [["id", "ASC"]],
		});
		res.status(200).json(allEvents);
	} catch (error) {
		console.log('error', error);
	}
};


var eraseEvents = (req, res) => {
	EventModel.destroy()
		.then(function (event) {
			res.status(200);
		});
};

module.exports = {
	getAllEvents: getAllEvents,
	addEvent: addEvent,
	getByActor: getByActor,
	eraseEvents: eraseEvents
};
