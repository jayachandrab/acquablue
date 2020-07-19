var mongoose = require('mongoose') ;
var countrySchema=mongoose.Schema({
    pondname:{type:String},
    pondsize:{type:String},
    phone:{type:String}
})

module.exports=mongoose.model('country',countrySchema);
