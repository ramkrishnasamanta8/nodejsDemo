const mongoose = require( "mongoose" );
const Topics = mongoose.model( "Topics" );

const add = ( data ) => {
    const topics = new Topics( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return topics.save();
};

const editTopics = async ( id, data ) => {
    if(data && id) {
        try {
            var topics = {
                name : data.name,
                description : data.description,
                talkingAbout : data.talkingAbout,
                status : data.status,
            };
            var tData = await Topics.updateOne({ _id: id }, topics, {omitUndefined:true});
            if(tData.n && tData.nModified){
                return findTopics(id);
            }else if(tData.n == 0){
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

const deleteTopics = async (id) => {
    var tData = await Topics.deleteOne({ _id: id });
    //return configData;
    if(tData.n && tData.deletedCount){
        return 'Deleted successfully';
    }else if(tData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findTopics = (id) => {
    try {
        var data;
        if(id){
            data = Topics.findById(id);
        }else{
            data = Topics.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editTopics,
    deleteTopics,
    findTopics,
};
