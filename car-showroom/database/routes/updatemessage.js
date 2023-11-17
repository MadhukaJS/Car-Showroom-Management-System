const express = require("express");
const Message = require("../models/msges");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,

      { message: req.body.newMessage },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        message,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err,
    });
  }
});

module.exports = router;
