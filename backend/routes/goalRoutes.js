const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ messsage: "Get goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ messsage: "Set goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ messsage: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ messsage: `Delete goal ${req.params.id}` });
});

module.exports = router;
