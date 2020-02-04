const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");

exports.register = async (req, res) => {
	/*const {user} = req;
	if (user) {
		logger.error("User already exists");
		res.preconditionFailed("existing_user");
		return;
	}*/

	//POST req.body
	//GET req.query
	//GET req.params
	console.log('---ram');
	try {
		const savedUser = await repository.saveUser(req.body);
		res.success(savedUser);
		//res.success(extractObject(savedUser, ["id", "userName"],));
	}
	catch (err) {
		res.mongooseError(err)
		//res.send( err );
	}
};

exports.edit = async (req, res) => {
	try {
		const user = await repository.findUser(req.body.id);
		const editedUser = await repository.editUser(user, req.body);
		res.success(extractObject(
			editedUser,
			["id", "username"],
		));
	}
	catch (err) {
		res.send(err);
	}
};

exports.delete = async (req, res) => {
	// try {
	// 	const user = await repository.findUser(req.user.id);
	// 	const deletedUser = await repository.deleteUser(user, req.body);
	// 	console.log(deletedUser);
	// 	res.success(extractObject(
	// 		deletedUser,
	// 		["id", "username"],
	// 	));
	// }
	// catch (err) {
	// 	console.log(err);
	// 	res.send(err);
	// }
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteComments = await repository.deleteUser(id);		
		res.success(deleteComments);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const config = await repository.findUser(id);
		res.success(config);
	}
	catch (err) {		
		res.mongooseError(err);
	}
};