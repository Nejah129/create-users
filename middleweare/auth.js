const jwt=require('jsonwebtoken');
const config=require('config');
const User = require('../model/User');
const secret=config.get('secret');



const isAuth=async(req,res,next)=>{
    const token=req.headers.authorization;
    try {
        const decoded=jwt.verify(token,secret);
        const user=await User.findById(decoded.id);//chniya il decoded .id ?
        if(!user)return res.status(401).json({msg:'Not Autherised'})
        else{
            req.user=user; 
            next()
        }
        
    } catch (error) {
        res.send(errors,error.message)
    }
}
module.exports =isAuth;