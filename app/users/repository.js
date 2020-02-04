const mongoose = require( "mongoose" );

const User = mongoose.model( "User" );

const saveUser = ( data ) => {
    const user = new User( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return user.save();
};

const editUser = ( user, data ) => {
    const { userName, password, isActive,userType } = data;    

    user.userName = userName;
    user.isActive = isActive;
    user.userType = userType;
    user.setPass( password ); //Change user passwor to MD5
    return user.save( );
};

//const deleteUser = ( user ) => user.remove();
const deleteUser = async (id) => {
    console.log('------------'+id);
    var shareData = await User.deleteOne({ _id: id });
    return shareData;
    // if(shareData.n && shareData.deletedCount){
    //     return 'Deleted successfully';
    // }else if(shareData.n == 0){
    //     return 'Not found:('
    // }else{
    //     return 'Not update:)'
    // }
}
//const findUser = ( id ) => User.findOne( { id } );
const findUser = (id) => {
    try {
        var data;
        if(id){
            data = User.findById(id);
        }else{
            data = User.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    }
    
}

module.exports = {
    saveUser,
    editUser,
    deleteUser,
    findUser,
};
