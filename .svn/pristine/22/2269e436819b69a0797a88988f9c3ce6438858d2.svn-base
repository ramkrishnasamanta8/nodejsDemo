const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");


exports.add = async (req, res) => {
	try {
		const savedFeedItems = await repository.add(req.body);
		res.success(savedFeedItems);
		//res.success(extractObject(savedConfig, ["key", "value"],));
	}
	catch (err) {
		res.mongooseError(err)
		//res.send( err );
	}
};

exports.edit = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		var data = req.body ? req.body : null;
		const editedData = await repository.editFeedItems(id, data);
		res.success(editedData);
	}
	catch (err) {
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const config = await repository.findFeedItems(id);
		res.success(config);
	}
	catch (err) {		
		res.mongooseError(err);
	}
};

exports.delete = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteFeedItems = await repository.deleteFeedItems(id);		
		res.success(deleteFeedItems);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};


// const extractObject = require("../../utilities/").extractObject;
// const logger = require("../../utilities/logger");
// const repository = require("./repository");

// exports.register = async (req, res) => {
// 	const {user} = req;
// 	if (user) {
// 		logger.error("User already exists");
// 		res.preconditionFailed("existing_user");
// 		return;
// 	}

// 	try {
// 		const savedUser = await repository.saveUser(req.body);
// 		res.success(extractObject(savedUser, ["id", "username"],));
// 	}
// 	catch (err) {
// 		res.mongooseError(err)
// 		//res.send( err );
// 	}
// };

// exports.edit = async (req, res) => {
// 	try {
// 		const user = await repository.findUser(req.user.id);
// 		const editedUser = await repository.editUser(user, req.body);
// 		res.success(extractObject(
// 			editedUser,
// 			["id", "username"],
// 		));
// 	}
// 	catch (err) {
// 		res.send(err);
// 	}
// };

// exports.delete = async (req, res) => {
// 	try {
// 		const user = await repository.findUser(req.user.id);
// 		const deletedUser = await repository.deleteUser(user, req.body);
// 		console.log(deletedUser);
// 		res.success(extractObject(
// 			deletedUser,
// 			["id", "username"],
// 		));
// 	}
// 	catch (err) {
// 		console.log(err);
// 		res.send(err);
// 	}
// };
