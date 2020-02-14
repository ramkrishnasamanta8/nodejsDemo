
const mongoose = require( "mongoose" );
const FeetItems = mongoose.model( "FeedItem" );

const add = ( data ) => {
    const fItem = new FeetItems( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return fItem.save();
};

const editFeedItems = async ( id, data ) => {
    if(data && id) {
        try {
            var feed = {
                gikkle : data.gikkle,
                body : data.body,
                isEdit : data.isEdit
            };
            var feedItemData = await FeetItems.updateOne({ _id: id }, feed, {omitUndefined:true});
            if(feedItemData.n && feedItemData.nModified){
                return findFeedItems(id);
            }else if(feedItemData.n == 0){
                return 'Not found:('
            }else{
                return 'Not update:)'
            }
        } catch (e) {
            console.error(e);
            return e;
        }
    }else{
        return null;
    }
};

const deleteFeedItems = async (id) => {
    var feedItemData = await FeetItems.deleteOne({ _id: id });
    //return configData;
    if(feedItemData.n && feedItemData.deletedCount){
        return 'Deleted successfully';
    }else if(feedItemData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findFeedItems = (id) => {
    try {
        var data;
        if(id){
            data = FeetItems.findById(id).populate('actorId whoId originalFeedId createdBy modifiedBy');
        }else{
            data = FeetItems.find().populate('actorId whoId originalFeedId createdBy modifiedBy');
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editFeedItems,
    deleteFeedItems,
    findFeedItems,
};



// const mongoose = require( "mongoose" );

// const User = mongoose.model( "User" );

// const saveUser = ( data ) => {
//     const user = new User( data );
//     user.setPass( data.password );
//     return user.save();
// };

// const editUser = ( user, data ) => {
//     const { name, sex, age } = data;
//     const currentUser = user;

//     currentUser.name = name;
//     currentUser.sex = sex;
//     currentUser.age = age;
//     return user.save( );
// };

// const deleteUser = ( user ) => user.remove();

// const findUser = ( id ) => User.findOne( { id } );

// module.exports = {
//     saveUser,
//     editUser,
//     deleteUser,
//     findUser,
// };
