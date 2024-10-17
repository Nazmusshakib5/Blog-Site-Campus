const UserModel=require('../models/UserModel')
const TokenHelper=require('../utility/tokenHelper')

const VerifyLoginService=async (req)=>{
    try{
        let reqBody=req.body;
        const userCount=await UserModel.find(reqBody).countDocuments();
        if(userCount>0){
            const user=await UserModel.find(reqBody).select('user');
            const userID=await UserModel.find(reqBody).select('_id');
            const token=await TokenHelper.EncodeToken(user,userID)
            return {status:'success',msg:'Valid User',token:token}

        }else{
            return {status:'failed',msg:'Invalid User'}
        }

    }catch (e) {
        return {msg:e.toString()}
    }
}

module.exports={
    VerifyLoginService
}