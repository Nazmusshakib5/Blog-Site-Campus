const {ShowQuoteService,CreateQuoteService} = require("../services/QouteService");


exports.ShowQuoteList=async (req,res)=>{
    const data = await ShowQuoteService();
    return res.status(200).json(data)
}


exports.CreateQuoteList = async (req, res) => {
    const data = await CreateQuoteService(req);
    return res.status(200).json(data)
}
