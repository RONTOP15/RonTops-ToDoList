// connect db
require('dotenv').config() 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

const connectDB = async ()=>{ 
    try {
       await mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
        
       console.log("MongoDB Connected ...");
    } catch (error) {
        console.error(error.message)
            // Exit Procces with Faliure
        process.exit(1)
    }
}

module.exports = connectDB;

// check the global variable
// console.log(proccess.env.MONGO_URI)

