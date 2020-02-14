const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
	key: { type: String, required: true, trim: true },
	value: { type: String, required: true, trim: true },
	description: { type: String, trim: true, lowercase: true },
}, {timestamps: true,   });

module.exports = mongoose.model("Config", configSchema);
