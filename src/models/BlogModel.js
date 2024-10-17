const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    blogTitle:{type:String,required:true},
    blogImage:{type:String,required:true},
    blogType:{type:String,required:true},
    blogDetails:{type:String,required:true}
},{timestamps:true,versionKey:false})

const BlogModel=mongoose.model('blogs',DataSchema)

module.exports=BlogModel;