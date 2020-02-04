const mongoose = require( "mongoose" );

const Comments = mongoose.model( "Comments" );

const add = async ( data ) => {    
    const comments = new Comments( data );
    return await comments.save();
};

const editComment = async ( id, data ) => { 
    if(data && id) {
        try {
            var commentEditObj = {
                //commentType : data.commentType,
                commentDesc : data.commentDesc,
               // gikkle : data.gikkle,
                isEdit : data.isEdit,
                //status : data.status
            };
            var commentsData = await Comments.updateOne({ _id: id }, commentEditObj, {omitUndefined:true});
            if(commentsData.n && commentsData.nModified){
                return findComment(id);
            }else if(commentsData.n == 0){
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

const deleteComment = async (id) => {
    var commentsData = await Comments.deleteOne({ _id: id });
    //return shareData;
    if(commentsData.n && commentsData.deletedCount){
        return 'Deleted successfully';
    }else if(commentsData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findComment = (id) => {
    try {
        var data;
        if(id){
            data = Comments.findById(id);
        }else{
            data = Comments.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    }
    
}

module.exports = {
    add,
    editComment,
     deleteComment,
     findComment,
};
