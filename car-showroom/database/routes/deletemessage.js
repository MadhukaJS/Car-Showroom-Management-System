const express = require("express");
const Message = require("../models/msges");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const deletemessage = await Message.findByIdAndRemove(
      req.params.id,
        req.body);

    res.status(200).json({
      status: "success",
      msg:deletemessage
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err,
    });
  }
})

module.exports = router;
