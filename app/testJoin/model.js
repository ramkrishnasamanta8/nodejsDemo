const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const configSchema = new Schema({
	billingAddr: { type: String},
	shippingAddr: { type: String},
	destination: { type: String},
	trademark: { type: String},
}, {timestamps: true,   });
module.exports = mongoose.model("TestJoin", configSchema);