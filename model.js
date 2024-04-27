const mongoose=require('mongoose');
const mschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
});
const model=mongoose.model('model',mschema);
module.exports=model;