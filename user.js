const mongoose=require('mongoose');






const Schema=mongoose.Schema;
const userSchema=new Schema({
    Name:{type:String},
    email:{type:String, unique:true},
    password:{type:String, required:true},
    
})
module.exports = mongoose.model('User',userSchema)
