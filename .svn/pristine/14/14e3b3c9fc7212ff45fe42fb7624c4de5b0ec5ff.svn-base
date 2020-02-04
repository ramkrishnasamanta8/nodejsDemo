const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
// anup//
exports.add = async (req, res) => {
	try {
		const savedLikes = await repository.add(req.body);
		res.success(savedLikes);
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
		const editedData = await repository.editLikes(id, data);
		res.success(editedData);
	}
	catch (err) {
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const config = await repository.findLikes(id);
		res.success(config);
	}
	catch (err) {		
		res.mongooseError(err);
	}
};

exports.delete = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteLike = await repository.deleteLikes(id);		
		res.success(deleteLike);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};
