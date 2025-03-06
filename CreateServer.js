const express= require('express')
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT=process.env.PORT || 3000;

const person = require('./models/person');
const Menu = require('./models/Menu');
//GET
app.get('/',function(req,res){
    res.send('hello world Nayan')
})

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir, i would love to share chicken')
// })



//Post for Menu


//Import the router files
const personRouter =require('./Routes/personRouter');
const menuRoutes =require('./Routes/menuRoutes');;
app.use('/person' ,personRouter);
app.use('/Menu' ,menuRoutes);


app.listen(PORT,()=>{
    console.log('listening on port 3000');
})
