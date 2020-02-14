const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    fieldname: { type: String, trim:true },
    originalname: { type: String, trim:true },
    encoding: { type: String, trim:true },
    mimetype: { type: String, trim:true },
    destination: { type: String, trim:true },
    filename: { type: String, trim:true },
    path: { type: String, trim:true },
    size: { type: String, trim:true },
    createdBy: { type: Schema.Types.ObjectId, trim:true ,ref:'User'},
    albumName: { type: Schema.Types.ObjectId, trim: true , ref:'Album'},
    usedBy: { type: String, enum: ['none','banner','profile','album'], default: 'none', required:true, lowercase: true },
    status: { type: String, enum: ['active','inactive'], default: 'active', required:true, lowercase: true },

}, {timestamps: true,   });

module.exports = mongoose.model("Files", configSchema);
