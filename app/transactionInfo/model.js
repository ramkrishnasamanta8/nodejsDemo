const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    refTransactionId: { type: Schema.Types.ObjectId,trim: true,required: true},
    eventCreater: { type: Schema.Types.ObjectId, trim: true ,required: true},
    earnPoints:{type : Number, trim: true, required: true},
    isearn:{type : Boolean, trim: true, default:false},
    isTransferToWallet:{type : Boolean, trim: true, default:false},
    ownerEarnPoints:{type : Boolean, trim: true, default:false},
    typeOfEvent: { type: String, enum: ['addbio','addbusinesshours','amenities','comment','coverpicture','handlername','interests','like','post','profilepicture','signupusingreferralcode','spiritanimal','subinterest','successfulreferral'], trim: true, lowercase: true,required:true,default:'post' },
  
}, {timestamps: true,   });

module.exports = mongoose.model("TransactionInfo", configSchema);
