const express = require("express");
const router = express.Router();
const { getDoctors,createDoctor,updateDoctor,deleteDoctor } = require("../controllers/doctorControllers");

router.get("/", getDoctors);

router.post("/",createDoctor);

router.put("/:id",updateDoctor);

router.delete("/:id",deleteDoctor);

module.exports = router;
