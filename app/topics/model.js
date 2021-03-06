const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    name: { type: String, required: true, trim: true, lowercase: true, unique:true},
    description: { type: String, trim: true ,default:''},
    createdBy: { type: Schema.Types.ObjectId, trim: true },
    talkingAbout:{type : Number},
    topicGroup:{ type: Schema.Types.ObjectId, trim: true },
    status:{ type: String, enum: ['active','inactive'], default: 'active', required:true, lowercase: true },
}, {timestamps: true,   });

module.exports = mongoose.model("Topics", configSchema);
