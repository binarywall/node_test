const jwt =require('jsonwebtoken');

const generate=(req,res)=>{
    let jwtKey=process.env.SECRET_KEY;
    let data={
        time:Date(),
        userID:"demo User"
    }
    const token=jwt.sign(data,jwtKey)
    res.send(token);
}

const verify=(req,res)=>{
    let tokenKey=process.env.TOKEN_HEADER;
    let jwtKey=process.env.SECRET_KEY;

    try{
        const token=req.header(tokenKey);
        const verify=jwt.verify(token,jwtKey)
        if(verify){res.send("Successfully Verified")}
        else{
            res.status(401).send(error)
        }
    }catch(error){
        res.status(401).send(error)
    }
}

module.exports={generate,verify}