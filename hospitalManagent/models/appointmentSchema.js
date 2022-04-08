const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'patient'
    },
    doctors:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'doctors'
        
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("appointments",appointmentSchema)