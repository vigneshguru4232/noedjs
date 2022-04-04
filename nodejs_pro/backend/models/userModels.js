const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"please enter a name"]
    },
    email:{
        type:String,
        required:[true,"Please enter an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter a password"]
    }
},{
    timestamps:true
})

module.exports =mongoose.model("user",userSchema)