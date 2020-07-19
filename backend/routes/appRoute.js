var express=require('express');

var router = express.Router();
var Country = require('../models/dataSchema');
var farmerRegister=require('../models/farmerregisterModel');


router.post('/create',(req,res,next)=>{
    console.log(req.body);
    var newCountry=new Country({
        pondname:req.body.pondname,
        pondsize:req.body.pondsize,
        phone:req.body.phone
    });
    newCountry.save((err,country)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:country});
        }
    });
    //res.status(200).json({msg:'hi'});

});


router.get('/read/:login',(req,res,next)=>{

    Country.find({ phone: req.params.login },(err,countries)=>{
        if(err){
            res.status(500).json({msg:err+"Please login to get your ponds details"});
        }
        else{
            res.status(200).json({msg:countries});
        }
    });
   

});


router.put('/update',(req,res,next)=>{
    console.log("in update "+req.body.pondsize);
    Country.findById(req.body._id,(err,country)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            country.pondname=req.body.pondname;
            country.pondsize=req.body.pondsize;
            country.save((err,country)=>{
                if(err){
                    res.status(500).json({errmsg:err});
                }
                else{
                    res.status(200).json({msg:country});

                }
            });
        }
    }
    );
    
});

router.delete('/delete/:id',(req,res,next)=>{
    console.log("==== "+req.params.id);
    Country.findByIdAndRemove({_id:req.params.id},(err,country)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:country});
        }
    });
    
});


router.post('/registerfarmer',(req,res,next)=>{
    
    console.log(req.body);
    var farmer=new farmerRegister({
        name:req.body.name,
        password:req.body.password,
        address:req.body.address,
        state:req.body.state,
        pincode:req.body.pincode,
        country:req.body.country,
        phone:req.body.phone,
        farmname:req.body.farmname

        
    });
    farmer.save((err,farmer)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:farmer});
        }
    });
    //res.status(200).json({msg:'farmer'});
    
});

router.post('/login',(req,res,next)=>{
    
    console.log(req.body);
  
    farmerRegister.find({ phone: req.body.phone },(err,farmer)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        else{
            console.log(farmer);
            console.log(farmer[0].password);
            console.log(req.body.password);
            if(farmer[0].password==req.body.password){
                res.status(200).json({msg:farmer[0]});
            }
            else{
                res.status(200).json({msg:"incorrect password"});
            }
            
        }
    });
    
    
    //res.status(200).json({msg:'hi'});
    

});

module.exports=router;
