// @desc       Get goals
// @route      GET /api/goals
// @access     Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc       Set goals
// @route      POST /api/goals
// @access     Private
const setGoals = (req, res) => {
  res.status(200).json({ messsage: "Set goal" });
};

// @desc       Update goals
// @route      PUT /api/goals/:id
// @access     Private
const updateGoal = (req, res) => {
  res.status(200).json({ messsage: `Update goal ${req.params.id}` });
};

// @desc       Delete goals
// @route      DELETE /api/goals/:id
// @access     Private
const deleteGoal = (req, res) => {
  res.status(200).json({ messsage: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
