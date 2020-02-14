const mongoose = require( "mongoose" );

const Test = mongoose.model( "Test" );
const USER = mongoose.model( "User" );

const add = async ( data ) => {
    const test = new Test( data );
    return await test.save();
};

const editConfig = async ( id, data ) => {  
    if(data && id) {
        try {
            var config = {
                value : data.value,
                description : data.description
            };
            var configData = await Test.updateOne({ _id: id }, config, {omitUndefined:true});
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
    var configData = await Test.deleteOne({ _id: id });
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
            data = Test.findById(id).populate('address shipAddress');     // by id
            //data = Test.findById({ _id: id });     // by id
            //data = Login.find({uname:'ram1',type:"cust 2"}).explain();    to view query
            //data = Login.find({"$or": [{"type": "staff"},{"uname": "ram"}]});  // or condition
            //data = Login.find({uname:'ram1',type:"cust 1"});  // and condition
            //data = Login.find( {"uname" : {$in : users.userName }});  //join

            //console.log('-----------'+JSON.stringify(data))
        }else{
            data = Test.find().populate('address shipAddress'); 
        }
        //console.log('-----------data'+JSON.stringify(data));
        return data;
        //return {data:{name:'ram',uname:'jfdsgg'}};
    } catch (e) {
        console.error(e);
    }
    
}
const findConfig2 = (id) => {
    try {
        var data;
        if(id){
            data = USER.find({userName:id});  // and condition
        }else{
            data = USER.find();
        }
        //console.log('-----------data'+JSON.stringify(data));
        return data;
        //return {data:{name:'ram',uname:'jfdsgg'}};
    } catch (e) {
        console.error(e);
    }
    
}
module.exports = {
    add,
    editConfig,
    deleteConfig,
    findConfig,
    findConfig2,
};
