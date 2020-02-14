const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    name: { type: String, trim:true },
    description: { type: String, trim:true },
    defaultImage: { type: String, trim:true },
    count:{ type: Number },
    createdBy:{ type: Schema.Types.ObjectId, trim: true , ref:'User'},
    status:{ type: String, enum: ['active','inactive'], default: 'active', required:true, lowercase: true },
    isDefault:{ type: Boolean,  default: true, required:true },
}, {timestamps: true,   });

module.exports = mongoose.model("TopicGroup", configSchema);
