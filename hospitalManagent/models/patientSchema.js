const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  patientAddress: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  patientAge: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    
  },
});

module.exports = mongoose.model("patient", patientSchema);
