const mongoose = require('mongoose');

//define the MongoDB connection URL
const mongoURL ='mongodb://localhost:27017/hotels' //Replace 'mydatabase' with your database name

//Set up MongoDb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Get the default

const db=mongoose.connection;