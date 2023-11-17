const express = require('express');

const Advertisement = require('../models/advertisementModel');

const router = express.Router();

// POST route for adding a new advertisement
router.post('/post-advertisement', async (req, res) => {
  const { title, description, imageUrl } = req.body;

  if (!title || !description || !imageUrl) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a new advertisement object
    const newAdvertisement = new Advertisement({
      title,
      description,
      imageUrl,
    });

    // Save the new advertisement to the database
    await newAdvertisement.save();

    // Respond with the added advertisement
    res.status(201).json(newAdvertisement);
  } catch (error) {
    console.error('Error adding advertisement:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
