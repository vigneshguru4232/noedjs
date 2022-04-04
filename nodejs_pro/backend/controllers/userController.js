const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModels");

//Register User

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  //if user already exist

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hashing password

  const hashedpassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedpassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

//loginUser

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json(400);
    throw new Error("fill details in the fields");
  }
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
};

//Its me

const getme = async (req, res) => {
  const { email, name, _id } = await User.findById(req.user.id);

  res.status(200).json({ message: "Me user", email, name, _id });
};

//creating JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

module.exports = { loginUser, registerUser, getme };
