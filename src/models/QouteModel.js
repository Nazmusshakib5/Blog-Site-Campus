const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    quoteTitle:{type:String,required:true},
    quoteImage:{type:String,required:true},
    quoteType:{type:String,required:true},
},{timestamps:true,versionKey:false})

const QuoteModel=mongoose.model('quotes',DataSchema)

module.exports=QuoteModel;