const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
	name: { type: String },
	gender: { type: String },
	price: { type: String },
	productName: { type: String },
	address: { type: Schema.Types.ObjectId, required: true, ref:'TestJoin' },
	shipAddress: { type: Schema.Types.ObjectId, required: true, ref:'TestJoin'},

}, {timestamps: true,   });

module.exports = mongoose.model("Test", configSchema);
