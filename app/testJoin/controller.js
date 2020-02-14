const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
// anup//
exports.add = async (req, res) => {
	
	try {
		const savedConfig = await repository.add(req.body);
		res.success(savedConfig);
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
		const editedData = await repository.editConfig(id, data);
		res.success(editedData);
	}
	catch (err) {
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;	
		const config = await repository.findConfig(id);
		//console.log('-----------config'+JSON.stringify(config.uname));
		//const config2 = await repository.findConfig2(config.uname);
		//res.success(config);
		res.success(config);
	}
	catch (err) {		
		res.mongooseError(err);
	}
};

exports.delete = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteConfig = await repository.deleteConfig(id);		
		res.success(deleteConfig);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};
