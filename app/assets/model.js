const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, trim: true , ref:'Product'},
    name: { type: String },
    serialNumber: { type: String},
    purchaseDate:{ type: Date},
    usageEndDate:{ type: Date },
    price:{ type: Number },
    quantity:{ type: Number },
    description:{ type: String },
    stockKeepingUnit:{ type:String },
    imageId:{ type: Schema.Types.ObjectId },
    isCardViewed:{ type: Boolean },
    title:{ type: String },
    clicks:{ type: Number },
    views:{ type: Number },
    userBy:{ type: Schema.Types.ObjectId, required:true,ref:'Users' },
    status:{ type: String, enum: ['purchased','redeemed'], default: 'purchased', required:true, lowercase: true },
}, {timestamps: true,   });

module.exports = mongoose.model("Assets", configSchema);
