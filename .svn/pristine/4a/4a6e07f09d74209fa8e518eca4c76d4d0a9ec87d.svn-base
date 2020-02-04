const mongoose = require( "mongoose" );

const Features = mongoose.model( "Features" );

const add = async ( data ) => {    
	//console.log('-----------data1'+JSON.stringify(data))
    const features = new Features( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return await features.save();
};

const editFeatures = async ( id, data ) => { 
    if(data && id) {
        try {
            var featuresConfig = {
                type : data.type
            };
            var featuresData = await Features.updateOne({ _id: id }, featuresConfig, {omitUndefined:true});
            if(featuresData.n && featuresData.nModified){
                return findShare(id);
            }else if(featuresData.n == 0){
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

// // const deleteUser = ( user ) => user.remove();

const deleteFeatures = async (id) => {
    var featuresData = await Features.deleteOne({ _id: id });
    //return shareData;
    if(featuresData.n && featuresData.deletedCount){
        return 'Deleted successfully';
    }else if(featuresData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findFeatures = (id) => {
    try {
        var data;
        if(id){
            data = Features.findById(id);
        }else{
            data = Features.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    }
    
}

module.exports = {
    add,
     editFeatures,
     deleteFeatures,
     findFeatures,
};
