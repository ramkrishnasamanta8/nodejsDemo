const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
// anup//
exports.add = async (req, res) => {
	
	try {
		const savedShare = await repository.add(req.body);
		res.success(savedShare);
		
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
		const shareData = await repository.editFeatures(id, data);
		res.success(shareData);
	}
	catch (err) {
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const shareAllData = await repository.findFeatures(id);
		res.success(shareAllData);
	}
	catch (err) {		
		res.mongooseError(err);
	}
};

exports.delete = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteFeatures = await repository.deleteFeatures(id);		
		res.success(deleteFeatures);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};
