const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    userBy: { type: Schema.Types.ObjectId, trim: true , ref:'User'},
    userTo: { type: Schema.Types.ObjectId, trim: true, ref:'User' },
    action: { type: String, enum: ['inprocess','approved','rejected','unfollow'], default: 'inprocess', required:true, lowercase: true },
    type:{ type: String, enum: ['friend','mute','hide','block'], default: 'friend', required:true, lowercase: true },
    status:{ type: String, enum: ['active','inactive'], default: 'active', required:true, lowercase: true },
}, {timestamps: true,   });

module.exports = mongoose.model("Connections", configSchema);
