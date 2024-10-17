const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    user:{type:String,required:true},
    pass:{type:String,required:true},
},{timestamps:true,versionKey:false})

const UserModel=mongoose.model('users',DataSchema)

module.exports=UserModel;