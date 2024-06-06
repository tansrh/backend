const mongoose=require('mongoose')
const schema = mongoose.Schema
const model=new schema({

    order:{
        type:String,
        required: true
    },
    amount:{
        type:String,
        required: true
    },
    id:{
        type:Number,
        required: true
    }
}, {timestamps:true} )
module.exports=mongoose.model('model5', model)