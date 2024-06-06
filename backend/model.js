const mongoose=require('mongoose')
const schema = mongoose.Schema
const model=new schema({

    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    }
    , 
    gender:{

        type:String,
        required: true
    }





}, {timestamps:true} )
module.exports=mongoose.model('model', model)