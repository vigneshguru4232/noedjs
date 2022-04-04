const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
//const {errorHandler } = require("./middleware/errorhandler")
const colors = require("colors");
const {dbconnection} = require("./config/db")

dbconnection()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Api
app.use("/api/goals",require("./routes/goalsRoutes"))
app.use("/api/users",require("./routes/userRoutes"))



app.listen(port,()=>{console.log(`Server connected to port ${port}`)})