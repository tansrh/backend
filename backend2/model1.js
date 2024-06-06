const mongoose=require('mongoose')
const schema = mongoose.Schema
const model=new schema({

    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    }
    , 
    password:{
        type:String,
        required: true
    }
    





}, {timestamps:true} )
module.exports=mongoose.model('model1', model)