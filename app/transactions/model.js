const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    createdby: { type: Schema.Types.ObjectId, required: true },
    feedId: { type: Schema.Types.ObjectId, required: true },
    referenceId: { type: Schema.Types.ObjectId, trim: true },
    type: { type: String, enum: ['blog','post','editbio','forum','profilesetup','referral'],default: 'post', required: true, lowercase: true },
    totalPoints:{type : Number, default: 0, required: true }
}, {timestamps: true,   });

module.exports = mongoose.model("Transactions", configSchema);
