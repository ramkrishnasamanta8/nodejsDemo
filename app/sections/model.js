const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const configSchema = new Schema({
    name: { type:String, trim: true },
    status: { type: String , enum: ['flag','menuitem','skore','dailybonus','gikklepoints','diningtype','aboutus','faq','features','feedback','info','learnmore','package','privacypolicy','support','termsofservice','animalicon','bannercustomer','bannerpartner','interest','amenties','gif','level','lootbox','box','level','lootbox','advertisement'], 
    default: 'flag', trim: true },
    faqType: { type: String, enum: ['learnmore', 'package'], default: 'learnmore', trim: true },
    homePageType: { type: String, enum: ['customer', 'partner'], default:'customer', trim: true },
    priority: { type: Number, trim: true},
    title: { type: String, trim: true},
    color: { type: String, trim: true},
    description: { type: String, trim: true},
    parent: { type: Schema.Types.ObjectId, trim: true},
    quantity: { type: Number, trim: true},
    wordcount: { type: Number, trim: true},
    topicName: { type: Schema.Types.ObjectId, trim: true},
    checked: { type: Boolean, trim: true},
    iconCssClassName: { type: String, trim: true},
    howManyGikkleRequired: { type: Number, trim: true},
    foodCategorize: { type: Schema.Types.Mixed, trim: true},
}, {timestamps: true,   });

module.exports = mongoose.model("Sections", configSchema);
