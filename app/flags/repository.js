const mongoose = require( "mongoose" );
const Flags = mongoose.model( "Flags" );

const add = ( data ) => {
    const flag = new Flags( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return flag.save();
};

const editFlags = async ( id, data ) => {
    if(data && id) {
        try {
            var flag = {
                message : data.message,
                status : data.status,
            };
            var fData = await Flags.updateOne({ _id: id }, flag, {omitUndefined:true});
            if(fData.n && fData.nModified){
                return findFlags(id);
            }else if(fData.n == 0){
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

const deleteFlags = async (id) => {
    var fData = await Flags.deleteOne({ _id: id });
    //return configData;
    if(fData.n && fData.deletedCount){
        return 'Deleted successfully';
    }else if(fData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findFlags = (id) => {
    try {
        var data;
        if(id){
            data = Flags.findById(id);
        }else{
            data = Flags.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editFlags,
    deleteFlags,
    findFlags,
};
