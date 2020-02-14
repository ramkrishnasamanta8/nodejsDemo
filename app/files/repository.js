const mongoose = require( "mongoose" );
const Files = mongoose.model( "Files" );

const add = ( data ) => {
    const files = new Files( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return files.save();
};

const editFiles = async ( id, data ) => {
    if(data && id) {
        try {
            var files = {
                name : data.name,
                description : data.description,
                defaultImage : data.defaultImage,
                count : data.count,
                status : data.status,
                isDefault : data.isDefault,
            };
            var tData = await Files.updateOne({ _id: id }, files, {omitUndefined:true});
            if(tData.n && tData.nModified){
                return findFiles(id);
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

const deleteFiles = async (id) => {
    var tData = await Files.deleteOne({ _id: id });
    //return configData;
    if(tData.n && tData.deletedCount){
        return 'Deleted successfully';
    }else if(tData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findFiles = (id) => {
    try {
        var data;
        if(id){
            data = Files.findById(id);
        }else{
            data = Files.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editFiles,
    deleteFiles,
    findFiles,
};
