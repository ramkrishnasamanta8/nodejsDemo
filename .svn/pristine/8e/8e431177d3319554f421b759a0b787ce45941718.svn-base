const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    createdby: { type: Schema.Types.ObjectId, trim: true },
    referenceId: { type: Schema.Types.ObjectId, trim: true },
    type: { type: String, enum: ['blog_post','chatter_post','edit_bio','forum_post','profile_setup','referral'], trim: true, lowercase: true },
    total_points:{type : Number}
}, {timestamps: true,   });

module.exports = mongoose.model("Transactions", configSchema);
