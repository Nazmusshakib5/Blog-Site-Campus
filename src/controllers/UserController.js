const {VerifyLoginService} = require("../services/VerifyLoginService");

exports.VerifyUserLogin=async (req,res)=>{
    const data=await VerifyLoginService(req)
    if(data['status']==='success'){
        let cookieOption={expires:new Date(Date.now()+24*6060*1000),httponly:false}
        res.cookie('token',data['token'],cookieOption)
        return res.status(200).json(data);
    }
    else {
        return res.status(200).json(data);
    }

}


exports.UserLogout=async (req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000),httponly:false}
    res.cookie('token','',cookieOption)
    return res.status(200).json({msg:'successfully logged out'});
}