const express = require("express");
const {
  getPatient,
  createPatient,
  updatePatient,
  deletePatient
} = require("../controllers/patientControllers");
const router = express.Router();
const patient = require("../models/patientSchema");
/**
 * Params req,res
 * function get
 */
router.get("/", getPatient);

router.post("/", createPatient);

router.put("/:id", updatePatient);

router.delete("/:id",deletePatient)

module.exports = router;
