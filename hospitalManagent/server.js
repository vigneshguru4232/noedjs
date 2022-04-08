const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const { dbConnect } = require("./config/db");
const { errorHandler } = require("./middleware/errorHandler");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB connection

dbConnect();

//routes

app.use("/api/patients", require("./routers/patientRoutes"));
app.use("/api/doctors", require("./routers/doctorRoutes"));
app.use("/api/appointment" , require("./routers/appointmentRoutes"))

app.use(errorHandler);
//port connection
app.listen(port, () => {
  console.log(`Successfully conected to the port ${port}`);
});
