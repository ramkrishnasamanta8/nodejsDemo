const mongoose = require( "mongoose" );
const Assets = mongoose.model( "Assets" );

const add = ( data ) => {
    const assets = new Assets( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return assets.save();
};

const editAssets = async ( id, data ) => {
    if(data && id) {
        try {
            var assets = {
                name : data.name,
                serialNumber : data.serialNumber,
                purchaseDate : data.purchaseDate,
                usageEndDate : data.usageEndDate,
                price : data.price,
                quantity : data.quantity,
                description : data.description,
                stockKeepingUnit : data.stockKeepingUnit,
                isCardViewed : data.isCardViewed,
                title : data.title,
                clicks : data.clicks,
                views : data.views,
                status : data.status
            };
            var tData = await Assets.updateOne({ _id: id }, assets, {omitUndefined:true});
            if(tData.n && tData.nModified){
                return findAssets(id);
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

const deleteAssets = async (id) => {
    var tData = await Assets.deleteOne({ _id: id });
    //return configData;
    if(tData.n && tData.deletedCount){
        return 'Deleted successfully';
    }else if(tData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findAssets = (id) => {
    try {
        var data;
        if(id){
            data = Assets.findById(id);
        }else{
            data = Assets.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editAssets,
    deleteAssets,
    findAssets,
};
