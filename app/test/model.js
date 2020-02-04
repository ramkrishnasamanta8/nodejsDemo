const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
	uname: { type: String, required: true, trim: true },
	pwd: { type: String, required: true, trim: true },
	type: { type: String, trim: true, lowercase: true },
	gender: { type: String, trim: true, lowercase: true },
	name: { type: String, trim: true, lowercase: true },
	address: { type: String, trim: true, lowercase: true },
}, {timestamps: true,   });

module.exports = mongoose.model("Login", configSchema);
