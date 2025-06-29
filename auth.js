const passport=require('passport');
const LocalStrategy= require('passport-local').Strategy;
const person=require('./models/person');

//app.use(logRequest);// line teels Express to use this middleware for all routes
passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
    //authentication logic here 
    try{
        console.log('Received Credentials:',USERNAME,password);
        const user=await person.findOne({username: USERNAME});
        if(!user){
            return done(null,false,{message:'Incorrect username.'});
        }
        const isPasswordMatch= await user.comparePassword(password);
        if(isPasswordMatch){
            return done(null,user);
        }else{
            return done (null,false,{message: 'Incorrect password.'});
        }
    }catch(err){
        return done(err);
    }
}));

module.exports=passport;//export configure passport