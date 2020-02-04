const mongoose = require( "mongoose" );

const Config = mongoose.model( "Config" );

const add = async ( data ) => {    
	console.log('-----------data'+JSON.stringify(data))
    const config = new Config( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return await config.save();
};

const editConfig = async ( id, data ) => {   
	console.log('-----------call ')
	console.log('-----------id>>>>'+id+'date >>> '+JSON.stringify(data))
    if(data && id) {
        try {
            var config = {
                value : data.value,
                description : data.description
            };
            var configData = await Config.updateOne({ _id: id }, config, {omitUndefined:true});
            if(configData.n && configData.nModified){
                return findConfig(id);
            }else if(configData.n == 0){
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

// const deleteUser = ( user ) => user.remove();

const deleteConfig = async (id) => {
    var configData = await Config.deleteOne({ _id: id });
    //return configData;
    if(configData.n && configData.deletedCount){
        return 'Deleted successfully';
    }else if(configData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findConfig = (id) => {
    try {
        var data;
        if(id){
            data = Config.findById(id);
        }else{
            data = Config.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    }
    
}

module.exports = {
    add,
    editConfig,
    deleteConfig,
    findConfig,
};
