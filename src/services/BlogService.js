const BlogModel=require('../models/BlogModel')

const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId;

const ShowBlogService=async ()=>{
    try{
        const data=await BlogModel.find()
        return {status:'success',msg:'blog data',data:data}
    }catch(e){
        return {status:'failed',data:e.toString()}
    }
}


const UpdateBlogService=async (req)=>{
    try{
        const blogID=new ObjectId(req.params.blogID)
        let reqBody=req.body;
        let data= await BlogModel.updateOne({_id:blogID},{$set:reqBody},{upsert:true})
        return {status:'success',msg:'Data Saved Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Blog is not Updated',err:e.toString()}
    }
}

const CreateBlogService=async (req)=>{
    try{
        let reqBody=req.body;
        let data= await BlogModel.create(reqBody)
        return {status:'success',msg:'Data Saved Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Blog is not Updated',err:e.toString()}
    }
}

const DeleteBlogService=async (req)=>{
    try{
        const blogID=new ObjectId(req.params.blogID)
        let data= await BlogModel.deleteOne({_id:blogID})
        return {status:'success',msg:'Data Deleted Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Blog is not Deleted',err:e.toString()}
    }
}

const ReadSingleBlogService=async (req)=>{
    try{
        const blogID=new ObjectId(req.params.blogID)
        let data= await BlogModel.findOne({_id:blogID})
        return {status:'success',msg:'Single Blog Data found Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Single Blog is not Found',err:e.toString()}
    }
}

const ReadBlogBySimilaritiesService=async (req)=>{
    try{
        const BlogID=new ObjectId(req.params.ID)
        let blogType= await BlogModel.findOne({_id:BlogID}).select('blogType')
        let data= await BlogModel.find({blogType:blogType['blogType']})
        return {status:'success',msg:'Similar Project Data found Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Similar Project is not Found',err:e.toString()}
    }
}



module.exports= {
    ShowBlogService,
    UpdateBlogService,
    CreateBlogService,
    DeleteBlogService,
    ReadSingleBlogService,
    ReadBlogBySimilaritiesService
}