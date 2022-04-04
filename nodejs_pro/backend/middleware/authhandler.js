const jwt = require("jsonwebtoken");
const User = require("../models/userModels")

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
    //getting token
      token = req.headers.authorization.split(" ")[1];

      //verify
      const decoded = jwt.verify(token,process.env.JWT_SECRET)

      //get user from token
        req.user = await User.findById(decoded.id).select('-password')
      next()

    } catch (error) {
        res.status(400)
        throw new Error("Not Authroised");
    }
  
  }
  if(!token){
    res.status(400)
    throw new Error("Not Authorized,no token available")
}
};


module.exports = {protect}
