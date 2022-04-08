const doctor = require("../models/doctorSchema");

/**
 * @description fetch doctors details
 * @route /api/doctors
 * @method GET
 */

const getDoctors = (req, res, next) => {
  try {
    doctor.find().then((response) => {
      res.json({
        response,
        message: "Fetched all Doctors",
      });
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description create new doctor
 * @route /api/doctors
 * @method POST
 */

const createDoctor = async (req, res, next) => {
  const { doctorName, docContactNumber, Specialized, degree, doctorEmail } =
    req.body;
  const data = {
    doctorName,
    docContactNumber,
    Specialized,
    degree,
    doctorEmail,

  };

  if (
    !doctorName ||
    !doctorEmail ||
    !docContactNumber ||
    !Specialized ||
    !degree
  ) {
    res.status(400).json({ message: "Enter all the field" });
  }

  try {
    //Doc already exist check:

    const findDoc = await doctor.findOne({ doctorEmail });
    if (findDoc !== null) {
      res.status(400);
      throw new Error("Doctor already exist");
    }

    //New Doc creating:

    const newDoctor = await doctor.create(data);

    if (newDoctor) {
      res.status(201).json({ message: "Doctor Created", newDoctor });
    }
  } catch (error) {
    next(error);
  }

  //console.log(findDoc)
};

/**
 * @description updating doctor details
 * @route /api/doctors
 * @method PUT
 */

const updateDoctor = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateDoctor = await doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (updateDoctor) {
      res.status(200).json({
        message: "Doctor Updated",
        updateDoctor,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @description delete doctor
 * @route /api/doctors/:id
 * @method DELETE
 */

const deleteDoctor = async (req, res, next) => {
  const id = req.params.id;

  try {
    const deletedDoctor = await doctor.findByIdAndDelete(id);
    if (deleteDoctor) {
      res.status(400).json({ message: "doctor deleted", deletedDoctor });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getDoctors, createDoctor, updateDoctor, deleteDoctor };
