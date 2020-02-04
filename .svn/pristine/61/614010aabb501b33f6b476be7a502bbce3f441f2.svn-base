const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
	feedId: { type: Schema.Types.ObjectId,  trim: true,required:true },
	commentId:{ type: Schema.Types.ObjectId,  trim: true },
	referenceFromId: { type: Schema.Types.ObjectId,  trim: true },
	userBy: { type: Schema.Types.ObjectId,  trim: true,required:true },
	userTo: { type: Schema.Types.ObjectId,  trim: true,required:true },
	type: { type: String, enum: ['mute','hide','share'], trim: true, lowercase: true,required:true,default:'mute' },
	status: { type: String, enum: ['active','inactive'], trim: true, lowercase: true,required:true,default:'active' },
}, {timestamps: true,   });

module.exports = mongoose.model("Features", configSchema);
