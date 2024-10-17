const QuoteModel = require("../models/QouteModel");


const ShowQuoteService=async ()=>{
    try{
        const data=await QuoteModel.find()
        return {status:'success',msg:'quote data',data:data}
    }catch(e){
        return {status:'failed',data:e.toString()}
    }
}


const CreateQuoteService=async (req)=>{
    try{
        let reqBody=req.body;
        let data= await QuoteModel.create(reqBody)
        return {status:'success',msg:'Quote Saved Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Quote is not Created',err:e.toString()}
    }
}


module.exports={
    ShowQuoteService,
    CreateQuoteService
}