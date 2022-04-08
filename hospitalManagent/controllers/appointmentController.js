const appointments = require("../models/appointmentSchema");
const patientList = require("../models/patientSchema");

const createAppointment = async (req, res ,next) => {
  const { patient, doctors, startTime, endTime } = req.body;
  const data = { patient, doctors, startTime, endTime };

  try {
    //console.log("log", patient);

    //Check patient is there
    const patientExist = await patientList.findById(patient);

    //console.log("patientExist ======",patientExist)

    if (patientExist === null) {
      throw new Error("Patient not Exist");
    }

    const newData = new appointments(data);
    newData.save().then((savedData) => {
      savedData.populate(["patient", "doctors"]).then((result) => {
        console.log(result);
        res.json({ appointment: result });
      });
    });
  } catch (error) {
    next(error);
  }

  // const appointment = await appointments.create(data)
  // const patientDetsails  = await
};

module.exports = { createAppointment };
