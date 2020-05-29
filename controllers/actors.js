const models = require('../models');
const EventModel = models.Event
const ActorModel = models.Actor
const RepoModel = models.Repo;


var getAllActors = () => {
	
};

var updateActor = async (req, res) => {
	try {
		const { actor_id, ...rest } = req.body;
		if (Object.keys(rest).length > 1) return res.status(400).json({message: 'Invalid Queue'})
		if (!Object.keys(rest).includes('avatar_url')) return  res.status(400).json({message: 'Invalid Operation'})
		const actor = await ActorModel.findAll({ where: { id: actor_id } });
		if (actor.length === 0) return res.status(404).json({message: 'actor not found'})
		
  		await ActorModel.update(
			{ avatar_url: rest.avatar_url },
			{ where: { id: actor_id } }
		)
		
		res.status(200).json({message: 'Updated!!'});
	} catch (err) {
		console.log(err)
	}
};

var getStreak = () => {

};


module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak
};

















