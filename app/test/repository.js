const mongoose = require( "mongoose" );

const Login = mongoose.model( "Login" );
const USER = mongoose.model( "User" );

const add = async ( data ) => {
    const login = new Login( data );
    return await login.save();
};

const editConfig = async ( id, data ) => {  
    if(data && id) {
        try {
            var config = {
                value : data.value,
                description : data.description
            };
            var configData = await Login.updateOne({ _id: id }, config, {omitUndefined:true});
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
    var configData = await Login.deleteOne({ _id: id });
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
            data = Login.findById({ _id: id });     // by id
            //data = Login.find({uname:'ram1',type:"cust 2"}).explain();    to view query
            //data = Login.find({"$or": [{"type": "staff"},{"uname": "ram"}]});  // or condition
            //data = Login.find({uname:'ram1',type:"cust 1"});  // and condition
            //data = Login.find( {"uname" : {$in : users.userName }});  //join

            //console.log('-----------'+JSON.stringify(data))
        }else{
            data = Login.find();
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
