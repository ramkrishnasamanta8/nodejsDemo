const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    name: { type: String, trim: true, required : true },
    productcode: { type: String, trim: true },
    description: { type: String, trim: true },
    stockkeepingunit: { type: Number, trim: true },
    addtags: { type: String, trim: true },
    amount: { type: Number, trim: true },
    cardTypes: { type: String, trim: true },
    chooseSkore: { type: String, trim: true },
    discountType: { type: String, trim: true },
    foodCategorize: { type: String, trim: true },
    imageId: { type: String, trim: true },
    image: { type: String, trim: true },
    item: { type: String, trim: true },
    maxspend: { type: String, trim: true },
    minspend: { type: String, trim: true },
    numberOfSkoresAvailable: { type: Number, trim: true },
    partnerName: { type: String, trim: true },
    qrCode: { type: String, trim: true },
    quantityConsumed: { type: Number, trim: true },
    rarity: { type: String, trim: true },
    remainingQuantity: { type: Number, trim: true },
    skoreStatus: { type: String, trim: true },
    skoreGikklePoints: { type: Number, trim: true },
    targerUrl: { type: String, trim: true },
    totalQuantity: { type: Number, trim: true },
    frequency: { type: String, trim: true },
    pages: { type: String, trim: true },
    startDate: { type: Date, trim: true },
    endDate: { type: Date, trim: true },
    createdbyid: { type: Schema.Types.ObjectId, trim: true, required : true , ref : 'Users' },
    

   
   
    
}, {timestamps: true,   });

module.exports = mongoose.model("Products", configSchema);
