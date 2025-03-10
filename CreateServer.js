const express= require('express')
const app=express();
const db=require('./db');
require('dotenv').config();
const passport=require('passport');
const LocalStrategy= require('passport-local').Strategy;
//const person=require('./models/person');



const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT=process.env.PORT || 3000;

//middleware Function
const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();//function is the callback that signals to Express that the current middleware function has completed its processing and it's time to move on to the next middleware function or route handler in the chain 
}

// const person = require('./models/person');
// const Menu = require('./models/Menu');
//GET
app.use(logRequest);// line teels Express to use this middleware for all routes
passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
    //authentication logic here 
    try{
        console.log('Received Credentials:',USERNAME,password);
        const user=await person.findOne({username: USERNAME});
        if(!user){
            return done(null,false,{message:'Incorrect username.'});
        }
        const isPasswordMatch=user.password===password? true : false;
        if(isPasswordMatch){
            return done(null,user);
        }else{
            return done (null,false,{message: 'Incorrect password.'});
        }
    }catch(err){
        return done(err);
    }
}))


app.use(passport.initialize());

const localAuthMiddleware=passport.authenticate('local',{session: false})
app.get('/',localAuthMiddleware,function(req,res){
    res.send('hello world Nayan');
})

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir, i would love to share chicken')
// })



//Post for Menu


//Import the router files
const personRouter =require('./Routes/personRouter');
const menuRoutes =require('./Routes/menuRoutes');
const person = require('./models/person');
app.use('/person' ,personRouter);
app.use('/Menu' ,localAuthMiddleware,menuRoutes);


app.listen(PORT,()=>{
    console.log('listening on port 3000');
})
