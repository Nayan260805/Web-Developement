const express= require('express');
const router =express.Router();
const person = require('./../models/person');

//Post route to add a person 

router.post('/', async (req,res)=>{

    try{
        const data=req.body //Assuming the request body contain the person data

    //Create a new Person document using the Mongoose model
        const newPerson=new person(data);
    
    //Save the new Person to the database
        const response =await newPerson.save();
        console.log('data Saved');
        res.status(200).json(response);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
})

router.get('/', async (req,res)=>{
    try{
        const data= await person.find();
        console.log('data Fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});

    }
})

router.get("/:workType",async(req, res)=>{
    try{
        const workType= req.params.workType; // Extra the work type from the URL parameter
        if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
            const response=await person.find({work:workType});
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

router.put('/:id',async (req,res)=>{
    try{
        const personID =req.params.id; //Extract the id from the URL parameter
        const updatePersonData=req.body;// Updated data foe the person

        const response =await person.findByIdAndUpdate(personID, updatePersonData,{
            new: true,//Return the updated document 
            runValidators: true,//Run mongooes validation
        })
        if (!response){
            return res.status(404).json({error:'person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});

    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const personID =req.params.id; //Extract the id from the URL parameter
        //const updatePersonData=req.body;// Updated data foe the person

        const response =await person.findByIdAndDelete(personID);
        if (!response){
            return res.status(404).json({error:'person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});

    }
})

module.exports=router;