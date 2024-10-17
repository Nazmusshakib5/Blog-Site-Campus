const {DecodeToken} = require("../utility/tokenHelper");

module.exports=(req,res,next)=>{
    let token=req.headers['token'];
    if(!token){
        token=req.cookies['token']
    }

    let decodeData=DecodeToken(token)
    if(decodeData===null){
        return  res.status(401).json({status:'failed',msg:'unauthorized'})
    }
    else {
        // let user=decodeData['user']
        // let pass=decodeData['pass']
        // req.headers.user=user
        // req.headers.pass=pass;
        next();
    }
}
