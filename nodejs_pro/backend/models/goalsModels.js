const mongoose = require("mongoose");



const goalsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    text:{
        type:"String",
        required:[true,"Plese Enter the text"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("goals",goalsSchema)