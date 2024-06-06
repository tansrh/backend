const mongoose=require('mongoose')
const schema = mongoose.Schema
const model=new schema({

    product:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    discount:{
        type:Number,
        required: true
    }
}, {timestamps:true} )
module.exports=mongoose.model('model4', model)