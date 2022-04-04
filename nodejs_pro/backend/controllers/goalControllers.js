const Goal = require("../models/goalsModels");

//getcontrol

const getControl = async (req, res) => {
  const goal = await Goal.find({ user: req.user.id });
  res.status(200).json({ message: "Get all the golas", goal });
};

//createcontrol

const createControl = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Enter the field");
  }
  const goal = await Goal.create({ text: req.body.text, user: req.user.id });
  res.status(200).json({ message: "create all the golas", goal });
};

//updatecontrol

const updateControl = async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!req.user) {
    req.status(400);
    throw new Error("No user Found");
  }
  if (!goal) {
    res.status(401);
    throw new Error("Goal not there");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const id = req.params.id;
  const updategoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res
    .status(200)
    .json({ message: `update all goals ${req.params.id}`, updategoal });
};

//deletecontrol

const deleteControl = async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findByIdAndDelete(id);
  const deletegoal = goal.remove();
  res
    .status(200)
    .json({ message: `delete all goals ${req.params.id}`, deletegoal });
};

module.exports = { getControl, createControl, updateControl, deleteControl };
