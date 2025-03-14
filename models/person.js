const { default: mongoose } = require('mongoose');
const mongooes= require('mongoose');

const bcrypt = require('bcrypt');
//Define the person Schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type:String,
        required: true
    },
    username:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    }
});

personSchema.pre('save',async function(next){
    const Person=this;

    //hash the password only if it has been modified (or is new)
    if(!Person.isModified('password')) return next();
    try{
        //hash password generation 
        const salt=await bcrypt.genSalt(10);//is responsible for generating a salt

        //hash password 
        const hashPassword= await bcrypt.hash(Person.password,salt);

        //Override the plain password with the hashed one
        Person.password=hashPassword;

        next();//call back function
    }catch(err){
        return next(err);

    }
})

personSchema.methods.comparePassword=async function (candidatePassword){
    try{
        //use bcrypt to compare the provide password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;

    }catch(err){
        throw err;
    }
}

// nayan ----> bdggwjbtjdcjhdakjdh
// login --> nehal
//compare function bdggwjbtjdcjhdakjdh --->nayan comapre function extract salt from password
// salt+nehal --->hash ---> swnnfceretnfjhfdvlew
//ye joh hash hai swnnfceretnfjhfdvlew == bdggwjbtjdcjhdakjdh is equal
//create person model 

const person = mongoose.model('person', personSchema);
module.exports=person;