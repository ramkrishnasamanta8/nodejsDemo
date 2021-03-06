const mongoose = require( "mongoose" );

const Sections = mongoose.model( "Sections" );

const add = ( data ) => {
    const section = new Sections( data );
    //user.setPass( data.password ); //Change user passwor to MD5
    return section.save();
};

const editSections = async ( id, data ) => {
    if(data && id) {
        try {
            var section = {
                priority: data.priority,
                title : data.title,
                color : data.color,
                description : data.description,
                quantity: data.quantity,
                wordcount: data.wordcount,
                checked : data.checked
            };
            var sectionData = await Sections.updateOne({ _id: id }, section, {omitUndefined:true});
            if(sectionData.n && sectionData.nModified){
                return findSections(id);
            }else if(sectionData.n == 0){
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

const deleteSections = async (id) => {
    var sectionData = await Sections.deleteOne({ _id: id });
    //return configData;
    if(sectionData.n && sectionData.deletedCount){
        return 'Deleted successfully';
    }else if(sectionData.n == 0){
        return 'Not found:('
    }else{
        return 'Not update:)'
    }
}
const findSections = (id) => {
    try {
        var data;
        if(id){
            data = Sections.findById(id);
        }else{
            data = Sections.find();
        }
        return data;
    } catch (e) {
        console.error(e);
    } 
}

module.exports = {
    add,
    editSections,
    deleteSections,
    findSections,
};
