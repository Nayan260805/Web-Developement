const { default: mongoose } = require('mongoose');
const mongooes= require('mongoose');
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

//create person model

const person = mongoose.model('person', personSchema);
module.exports=person;