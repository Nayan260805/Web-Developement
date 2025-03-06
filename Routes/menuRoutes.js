const express= require('express');
const router =express.Router();
const Menu = require('./../models/Menu');
const { validate } = require('../models/person');

router.post('/', async (req,res)=>{

    try{
        const data=req.body //Assuming the request body contain the person data

    //Create a new Person document using the Mongoose model
        const newMenu=new Menu(data);
    
    //Save the new Menu to the database
        const response =await newMenu.save();
        console.log('data Saved');
        res.status(200).json(response);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
})
//Get method to get the Menu
router.get('/', async (req,res)=>{
    try{
        const data= await Menu.find();
        console.log('data Fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});

    }
})

router.get("/:tasteType",async(req, res)=>{
    try{
        const tasteType= req.params.tasteType; // Extra the work type from the URL parameter
        if(tasteType=='sweet'|| tasteType=='spicy'|| tasteType=='sour'){
            const response=await Menu.find({taste:tasteType});
            console.log('response fetched');
            res.status(200).json(response);

        }else{
            res.status(404).json({error:'Invalide work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
   
})

router.put('/:id',async(req,res)=>{
    try{
        const MenuId=req.params.id;
        const updatedataMenu=req.body;

        const response=await Menu.findByIdAndUpdate(MenuId,updatedataMenu,{
            new:true,
            runValidators:true,
        })
        if (!response){
            return res.status(404).json({error:'menu not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});

    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const MenuId=req.params.id;

        const response=await Menu.findByIdAndDelete(MenuId);
        if (!response){
            return res.status(404).json({error:'menu not found'});
        }

        console.log('data deleted');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});

    }
})


module.exports=router;