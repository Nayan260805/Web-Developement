const express= require('express')
const app=express();
const db=require('./db');
//GET
app.get('/',function(req,res){
    res.send('hello world Nayan')
})

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir, i would love to share chicken')
// })


app.listen(3000,()=>{
    console.log('listening on port 3000');
})