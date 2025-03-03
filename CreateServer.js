const express= require('express')
const app=express();
const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const person = require('./models/person');
//GET
app.get('/',function(req,res){
    res.send('hello world Nayan')
})

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir, i would love to share chicken')
// })

app.post('/person', async (req,res)=>{

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
//Get method to get the person
app.get('/person', async (req,res)=>{
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

app.listen(3000,()=>{
    console.log('listening on port 3000');
})
