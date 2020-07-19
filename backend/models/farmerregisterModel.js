var mongoose = require('mongoose') ;
var farmerRegModel=mongoose.Schema({
    name:{type:String},
    password:{type:String},
    address:{type:String},
    pincode:{type:String},
    state:{type:String},
    country:{type:String},
    phone:{type:String},
    farmname:{type:String}

})

module.exports=mongoose.model('farmerRegistrationModel',farmerRegModel);
