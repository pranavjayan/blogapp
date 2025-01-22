const express=require('express');
const router=express.Router();
router.use(express.json());
const userModel=require('../model/userData');
const jwt=require('jsonwebtoken');
router.use(express.urlencoded({extended:true}));
router.post('/login',async(req,res)=>{
const user=await  userModel.findOne({userEmail:req.body.email});
if(!user){
    res.status(404).send({message:'User not found'});
}
try {
    if(user.userPassword==req.body.password)
    {
        const payload={email:user.email,password:user.password};
        const token=jwt.sign(payload,'secret');//secret is the secret key
        res.status(200).send({message:'Login successfull',token:token});
    }
    else{
        res.status(400).send({message:'Inavalid Credentials'})
    }
} 
catch (error) {
    console.log(error);
    
}

})











module.exports=router;