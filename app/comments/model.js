const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
	feedId: { type: Schema.Types.ObjectId,  trim: true },
	type: { type: String , enum: ['comment','reply'], default: 'comment', trim: true, required: true, lowercase: true},
	description: { type: String,  trim: true },
	referenceId: { type: Schema.Types.ObjectId,  trim: true },
	commentType: { type: String , enum: ['comment', 'reply'], default: 'feed', trim: true },
	commentDesc: { type: String , trim: true },
	parentId: { type: Schema.Types.ObjectId, trim: true},
	image: { type: Schema.Types.Mixed, trim: true},
	count: { type: String, trim: true},
	gikkle: { type:Number, trim: true},
	createdBy: { type: Schema.Types.ObjectId, trim: true},
	modifiedBy: { type: Schema.Types.ObjectId, trim: true},
	mention: { type: Schema.Types.Mixed, trim: true},
	hashtag: { type: Schema.Types.Mixed, trim: true},
	flag: { type: Schema.Types.ObjectId, trim: true},
	isEdit: { type: Boolean, trim: true},
	status: { type: String , enum: ['active','inactive'], default: 'active', trim: true , required: true, lowercase: true},
	metaInfo: { type: Schema.Types.Mixed, trim: true},
}, {timestamps: true,   });

module.exports = mongoose.model("Comments", configSchema);
