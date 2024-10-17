const jwt=require('jsonwebtoken');

exports.EncodeToken=(user,Pass)=>{
    let KEY='ABC-1234';
    let EXPIRE={expiresIn:'24h'}
    let PAYLOAD={user:user,pass:Pass}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

exports.DecodeToken=(token)=>{
    try{
        let KEY='ABC-1234';
        return jwt.verify(token,KEY)

    }catch (e) {
        return  null
    }
}