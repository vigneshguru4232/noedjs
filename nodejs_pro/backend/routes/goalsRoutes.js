const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const {getControl,createControl,updateControl,deleteControl} =require("../controllers/goalControllers")
const {protect}  =require("../middleware/authhandler");
 
//get Routes
router.get("/",protect,getControl)

//create Routes
router.post("/",protect,createControl)


//update Routes
router.put("/:id",protect,updateControl)

//deleteRoutes
router.delete("/:id",protect,deleteControl)

module.exports = router;