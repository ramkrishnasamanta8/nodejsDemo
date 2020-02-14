const mongoose = require( "mongoose" );
const Albums = mongoose.model( "Albums" );

const add = ( data ) => {
    const Album = new Albums( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return Album.save();
};

const editAlbums = async ( id, data ) => {
    if(data && id) {
        try {
            var album = {
                description : data.description,
                status : data.status,
                name : data.name,
                defaultImage : data.defaultImage,
                count:data.count
            };
            var albumData = await Albums.updateOne({ _id: id }, album, {omitUndefined:true});
            if(albumData.n && albumData.nModified){
                return findAlbums(id);
            }else if(albumData.n == 0){
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

const deleteAlbums = async (id) => {
    var albumData = await Albums.deleteOne({ _id: id });
    //return configData;
    if(albumData.n && albumData.deletedCount){
        return 'Deleted successfully';
    }else if(albumData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findAlbums = (id) => {
    try {
        var data;
        if(id){
            data = Albums.findById(id);
        }else{
            data = Albums.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editAlbums,
    deleteAlbums,
    findAlbums,
};
