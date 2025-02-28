const mongoose = require('mongoose');

//define the MongoDB connection URL
const mongoURL ='mongodb://localhost:27017/hotels' //Replace 'mydatabase' with your database name

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
})

db.on('error', (err) =>{
    console.log('MongoDB connection error', err);
})

db.on('disconnected', () =>{
    console.log('mongoDB disconnedted');
})

//Export the database connection
module.exports=db;