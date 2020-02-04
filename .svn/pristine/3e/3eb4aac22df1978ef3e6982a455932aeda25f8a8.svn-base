const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
// anup//
exports.add = async (req, res) => {
	try {
		const savedTransactionInfo = await repository.add(req.body);
		res.success(savedTransactionInfo);
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
		const editedData = await repository.editTransactionInfo(id, data);
		res.success(editedData);
	}
	catch (err) {
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const transactionInfo = await repository.findTransactionInfo(id);
		res.success(transactionInfo);
	}
	catch (err) {		
		res.mongooseError(err);
	}
};

exports.delete = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteTransactionInfo = await repository.deleteTransactionInfo(id);		
		res.success(deleteTransactionInfo);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};
