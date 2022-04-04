const mongoose = require("mongoose")


const dbconnection  = async()=>{
  
try {
    const conn = await mongoose.connect("mongodb+srv://vignesh:vignesh@cluster0.6coxa.mongodb.net/jwt?retryWrites=true&w=majority")
    console.log(`DB Connected successfully:${conn.connection.host}`.cyan.underline)
} catch (error) {
    console.log(error)
    process.exit(1)
}
     
}

module.exports ={dbconnection}