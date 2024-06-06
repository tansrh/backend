const express = require('express')
const router = express.Router()
const model1=require('./model1')
const model2=require('./model2')
const model3=require('./model3')
const model4=require('./model4')
const model5=require('./model5')
const mongoose=require('mongoose')

router.get('/', async (req, res) => {

    const data= await model1.find({}).sort({createdAt: -1})
    res.status(200).json(data)

})

router.get('/:id', async (req, res) => {
    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error: 'no such member'})
    }
    const data= await model1.findById(id)
    if(!data){

        return res.status(404).json({Error: 'no such member'})

    }
    res.status(200).json( data )

})

router.post('/', async (req, res) => {
    const {name, address, email, password}=req.body;

try{

const model=await model1.create({name, address, email, password})
res.status(200).json(model)

}
catch(error){

res.status(400).json({error: error.message})
}
})

router.post('/loginauth', async (req, res) => {
    const {email, password}=req.body;

try{
    const data= await model1.find({"email": email, "password": password})
    
        res.status(200).json(data)
    
    
    /*
    res.status(200).json(data)
const model=await model1.create({name, address, email, password})
res.status(200).json(model)*/

}
catch(error){

res.status(400).json({error: error.message})
}
})


router.post('/addtocart', async (req, res) => {
    const {product, category, id, price}=req.body;

try{

const model=await model2.create({product, category, id, price})
res.status(200).json(model)

}
catch(error){

res.status(400).json({error: error.message})
}

    

})
router.get('/getcart', async (req, res) => {
    const {id}=req.body
    const data= await model2.find({"id": id}).sort({createdAt: -1})
    if(!data.ok){
        res.status(404).json(data)
    }
    else{
        res.status(200).json(data)
    }
    
})
router.get('/products', async (req, res) => {
    const {category}=req.body
    const data= await model3.find({"category": category}).sort({createdAt: -1})
    if(!data.ok){
        res.status(404).json(data)
    }
    else{
        res.status(200).json(data)
    }
    

})
router.get('/discounts', async (req, res) => {
    const {category}=req.body
    const data= await model4.find({"category": category}).sort({createdAt: -1})
    if(!data.ok){
        res.status(404).json(data)
    }
    else{
        res.status(200).json(data)
    }
    

})

router.get('/search/:category', async (req, res) => {
    const {category}=req.params
    const data= await model4.find({"category": category}).sort({createdAt: -1})
    if(!data.ok){
        res.status(404).send("No matches")
    }
    else{
        res.status(200).json(data)
    }
    

})
router.patch('/updatediscount/:id', async (req, res) => {

    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error: 'no such member'})
    }
    const data= await models2.findOneAndUpdate({ _id: id}, {

        ...req.body

    })
    if(!data){

        return res.status(404).json({Error: 'no such member'})

    }
    res.status(200).json( data )


})
router.post('/addorder', async (req, res) => {
    const {order, amount, id}=req.body;

try{

const model=await model5.create({order, amount, id})
res.status(200).json(model)

}
catch(error){

res.status(400).json({error: error.message})
}

    

})
module.exports = router