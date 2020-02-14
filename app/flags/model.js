const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    feedId: { type: Schema.Types.ObjectId, required: true },
    category: { type: Schema.Types.ObjectId, required: true },
    subCategory: { type: Schema.Types.ObjectId},
    message: { type: String, trim: true },
    action: { type: String, enum:['no','hide_from_my_wall','to_admin'], default:'no', required: true, lowercase: true },
    userBy: { type: Schema.Types.ObjectId, required: true },
    status:{type : String, enum:['active','inactive'], default :'active',  required: true, lowercase: true},
    
}, {timestamps: true,   });

module.exports = mongoose.model("Flags", configSchema);
