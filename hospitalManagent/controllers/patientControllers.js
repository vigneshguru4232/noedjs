const patient = require("../models/patientSchema");

/**
 * @description fetch patients
 * @route /api/patients
 * @method GET
 */

const getPatient = async (req, res ,next) => {
  try {
    const findingPatient = await patient.find();
    res.status(200).json({ message: "All patients", findingPatient });
  } catch (error) {
    next(error)
  }
};

/**
 * @description create new patient
 * @route /api/patients
 * @method POST
 */

const createPatient = async (req, res, next) => {
  const {
    patientName,
    patientEmail,
    patientAddress,
    contactNumber,
    patientAge,
    notes,
    gender,
  } = req.body;

  const data = {
    patientName,
    patientEmail,
    patientAddress,
    contactNumber,
    patientAge,
    notes,
    gender,
  };

  try {
    if (
      !patientName ||
      !patientEmail ||
      !patientAddress ||
      !contactNumber ||
      !patientAge ||
      !notes ||
      !gender
    ) {
      res.status(400);
      throw new Error("Please Enter all the field");
    }

    //Check patient already exist

    const patientExist = await patient.findOne({ patientEmail });

    if (patientExist) {
      res.status(400);

      throw new Error("Patient already Exist");
    }

    const newPatient = await patient.create(data);
    // console.log("New Patient =====", newPatient);

    if (newPatient) {
      res.status(201).json({
        _id: newPatient.id,
        name: newPatient.patientName,
        email: newPatient.patientEmail,
        gender: newPatient.gender,
        age: newPatient.age,
        contactNumber: newPatient.contactNumber,
        notes: newPatient.notes,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update patient
 * @route /api/patients/:id
 * @method PUT
 */

const updatePatient = async (req, res ,next) => {
  const id = req.params.id;
  try {
    const updatePatient = await patient.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: `update patient Details ${req.params.id}`,
      updatePatient,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description delete patient
 * @route /api/patients/:id
 * @method DELETE
 */

const deletePatient = async (req, res ,next) => {
  const id = req.params.id;

  try {
    const deletePatient = await patient.findByIdAndDelete(id);
    //const removedPerson = deletePatient.remove();
    res.status(200).json({ message: `Delete person ${id}`, deletePatient });
  } catch (error) {
    next(error);
  }
};

module.exports = { createPatient, getPatient, updatePatient, deletePatient };
