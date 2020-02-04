const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    feedId: { type: Schema.Types.ObjectId},
    commentId: { type: Schema.Types.ObjectId},
    referenceId: { type: Schema.Types.ObjectId, trim: true },
    typeOfLike: { type: String, enum: ['like','upvote','downvote'], default:'like', required: true, lowercase: true },
    userId: { type: Schema.Types.ObjectId,  trim: true },
	status: { type: String , enum: ['active','inactive'], default: 'active', trim: true, required: true, lowercase: true},
    gikkles: { type: Number, trim: true,default: 0},
    type: { type: String, enum: ['post','blog','forum','comment','reply'],default: 'post', trim: true, lowercase: true },
}, {timestamps: true,   });

module.exports = mongoose.model("Likes", configSchema);
