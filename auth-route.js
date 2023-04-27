const router = require('express').Router();
const User = require('../models/user');



router.post('/register',(req,res)=>{
   const user = new User({
    Name:req.body.Name,
    email:req.body.email,
    password:req.body.password,
   })
console.log(user);
   user.save()
   .then((_)=>{
    res.json({success:true,message:"Account has been created"})
   })
   .catch((err)=>{
    // if(err.code === 1100){
    //     return res.setDefaultEncoding({success:false, message:"Emmail is already exist"})
    // }
    res.json({success:false,message:"Authontication failed"})
   })
});;


router.post('/login',(req,res)=>{
    res.json("login works")
})


module.exports = router