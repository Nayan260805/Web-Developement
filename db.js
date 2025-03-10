const mongoose = require('mongoose');
require('dotenv').config();

//define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL;//Replace 'mydatabase' with your database name
//const mongoURL =process.env.MONGODB_URL; //Replace 'mydatabase' with your database name

//Set up MongoDb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Get the default
//mongooes maintains a default connection object representing the mongoDB connection
const db=mongoose.connection;

//define the event listeners for database connection
db.on('connected', () =>{
    console.log('connected to the mongodb server');
});

db.on('error', (err) =>{
    console.error('MongoDB connection error', err);
});

db.on('disconnected', () =>{
    console.log('mongoDB disconnedted');
});

//Export the database connection
module.exports=db;