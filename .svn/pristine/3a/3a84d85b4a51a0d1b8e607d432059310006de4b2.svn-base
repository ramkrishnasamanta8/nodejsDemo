const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
// anup//
exports.add = async (req, res, next) => {
	try {
		//console.log(req.body);
		//console.log(req.query);
		//console.log(req.params);
		//console.log('----'+req.file.fieldname);
		//console.log(req.files);
		let tempObj = {
			fieldname: req.file.fieldname,
			originalname: req.file.originalname,
			encoding: req.file.encoding,
			mimetype: req.file.mimetype,
			destination: req.file.destination,
			filename: req.file.filename,
			path: req.file.path,
			size: req.file.size,
			createdBy: req.body && req.body.createdBy ? req.body.createdBy : '',
			albumName: req.body && req.body.albumName ? req.body.albumName : '',
			usedBy: req.body && req.body.usedBy ? req.body.usedBy : '',
			status: req.body && req.body.status ? req.body.status : '',
		}
		//console.log('>>>>>' + JSON.stringify(tempObj));
		const savedFiles = await repository.add(tempObj);
		res.success(savedFiles);
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
		const editedData = await repository.editFiles(id, data);
		res.success(editedData);
	}
	catch (err) {
		res.send(err);
	}
};

exports.all = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const findFiles = await repository.findFiles(id);
		res.success(findFiles);
	}
	catch (err) {
		res.mongooseError(err);
	}
};

exports.delete = async (req, res) => {
	try {
		var id = req.params.id ? req.params.id : null;
		const deleteFiles = await repository.deleteFiles(id);
		res.success(deleteFiles);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
};
