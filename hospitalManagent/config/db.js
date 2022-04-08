const mongoose  =require("mongoose");


const dbConnect = async()=>{
    try {
        
        const conn = await mongoose.connect("mongodb+srv://vignesh:vignesh@cluster0.8ipdd.mongodb.net/hospital?retryWrites=true&w=majority")
        console.log(`DB connected Successfully : ${conn.connection.host}`)


    } catch (error) {
        console.log(error);
    }
}

module.exports = {dbConnect}