const express = require('express')
const router = express.Router()
const models=require('./model')
const mongoose=require('mongoose')

router.get('/', async (req, res) => {

    const data= await models.find({}).sort({createdAt: -1})
    res.status(200).json(data)

})

router.get('/:id', async (req, res) => {
    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error: 'no such member'})
    }
    const data= await models.findById(id)
    if(!data){

        return res.status(404).json({Error: 'no such member'})

    }
    res.status(200).json( data )

})

router.post('/', async (req, res) => {
    const {name, age, gender}=req.body;

try{

const model=await models.create({name, age, gender})
res.status(200).json(model)

}
catch(error){

res.status(400).json({error: error.message})
}

    

})

router.delete('/:id', async (req, res) => {

    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error: 'no such member'})
    }
    const data= await models.findOneAndDelete({ _id: id})
    if(!data){

        return res.status(404).json({Error: 'no such member'})

    }
    res.status(200).json( data )

})

router.patch('/:id', async (req, res) => {

    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error: 'no such member'})
    }
    const data= await models.findOneAndUpdate({ _id: id}, {

        ...req.body

    })
    if(!data){

        return res.status(404).json({Error: 'no such member'})

    }
    res.status(200).json( data )


})

module.exports = router