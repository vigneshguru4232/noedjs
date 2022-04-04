//Express configuration

// Install express

// npm i express

const express = require("express");
const { Server } = require("http");

const app = express();

app.use();
app.use(cors()); //using cross-origin-resource-sharing
app.get("",(req,res)=>{

}) //Api call

app.listen(PORT,()=>{
    console.log(`Server connected to the PORT:${PORT}`);
})


//cors(cross-origin-resource-policy)

// It used to send response with different port.

//Installation

//npm i cors

// Importation

//const cors = require('cors');

app.use(cors())

//we can define the Ip that want to share using origin prop.

app.use(cors({
    origin:['127.0.0.1:8000',]
}))

//we can also define the http method that only want to perform by the Server.



