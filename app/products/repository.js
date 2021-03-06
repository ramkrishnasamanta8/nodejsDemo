const mongoose = require( "mongoose" );
const Products = mongoose.model( "Products" );

const add = ( data ) => {
    const product = new Products( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return product.save();
};

const editProducts = async ( id, data ) => {
    if(data && id) {
        try {
            var product = {
                description : data.description,
                stockkeepingunit : data.stockkeepingunit,
                name : data.name,
                amount : data.amount,
                cardTypes:data.cardTypes,
                chooseSkore:data.chooseSkore,
                discountType:data.discountType,
                foodCategorize:data.foodCategorize,
                image:data.image,
                maxspend:data.maxspend,
                minspend:data.minspend,
                
            };
            var pData = await Products.updateOne({ _id: id }, product, {omitUndefined:true});
            if(pData.n && pData.nModified){
                return findProducts(id);
            }else if(pData.n == 0){
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

const deleteProducts = async (id) => {
    var pData = await Products.deleteOne({ _id: id });
    //return configData;
    if(pData.n && pData.deletedCount){
        return 'Deleted successfully';
    }else if(pData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findProducts = (id) => {
    try {
        var data;
        if(id){
            data = Products.findById(id);
        }else{
            data = Products.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editProducts,
    deleteProducts,
    findProducts,
};
