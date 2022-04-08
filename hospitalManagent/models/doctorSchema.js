const mongoose =require("mongoose");


const doctorSchema = new mongoose.Schema({
    doctorName:{
        type:String,
        required:true
    },
    doctorEmail:{
        type:String,
        required:true
    },
    docContactNumber:{
        type:String,
        required:true
    },
    Specialized:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        required:true
    }
})


module.exports = mongoose.model("doctors",doctorSchema);