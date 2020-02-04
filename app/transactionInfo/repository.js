const mongoose = require( "mongoose" );
const TransactionInfo = mongoose.model( "TransactionInfo" );

const add = ( data ) => {
    const transacInfo = new TransactionInfo( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return transacInfo.save();
};

const editTransactionInfo = async ( id, data ) => {
    if(data && id) {
        try {
            var tInfo = {
                earn_points : data.earn_points,
                isearn : data.isearn,
                isread: data.isread
            };
            var tInfoData = await TransactionInfo.updateOne({ _id: id }, tInfo, {omitUndefined:true});
            if(tInfoData.n && tInfoData.nModified){
                return findConfig(id);
            }else if(tInfoData.n == 0){
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

const deleteTransactionInfo = async (id) => {
    var tInfoData = await TransactionInfo.deleteOne({ _id: id });
    //return configData;
    if(tInfoData.n && tInfoData.deletedCount){
        return 'Deleted successfully';
    }else if(tInfoData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findTransactionInfo = (id) => {
    try {
        var data;
        if(id){
            data = TransactionInfo.findById(id);
        }else{
            data = TransactionInfo.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editTransactionInfo,
    deleteTransactionInfo,
    findTransactionInfo,
};
