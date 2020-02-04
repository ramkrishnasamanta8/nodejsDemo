const mongoose = require("mongoose");
//const md5 = require("md5");

const Schema = mongoose.Schema;

const feedItemSchema = new Schema({
	
    actorId: {type: Schema.Types.ObjectId, required: true},
    whoId: {type: Schema.Types.ObjectId},
    body: {type: String,default:''},
    isEdit: {type: Boolean,default:false},
    originalFeedId: {type: Schema.Types.ObjectId}, // In case of Share 
    metaInfo: {type: Schema.Types.Mixed,default:[]},
    images: {type: Schema.Types.Mixed,default:[]},
    typeOfLikes: {type: Schema.Types.Mixed,default:[]},
    count: {
        like: { type: Number, default: 0 }, // Like transaction table
        share: { type: Number, default: 0 }, // Share transaction table
        comment: { type: Number, default: 0 } // Comment Transaction table
    },
    status:	{type: String, enum: ["active","inactive"], default:'active', required: true, lowercase: true},
    createdBy: {type: Schema.Types.ObjectId},
    modifiedBy: {type: Schema.Types.ObjectId},
    mention:{type:Schema.Types.Mixed,default:[]},
    hashtag:{type:Schema.Types.Mixed,default:[]}, //Table needs to be created for hashtag.
    flag: { type: Schema.Types.ObjectId }, //Table needs to be created for Flag - Master and transaction.
    gikkle: { type: Number, default: 0 }, //Config table, transaction and transaction info table
    type:	{type: String, enum: ['dpost','dblog','dforumn','post','blog','forumn'], default:'post', required: true, lowercase: true},
    }, {timestamps: true,   });

module.exports = mongoose.model("FeedItem", feedItemSchema);

