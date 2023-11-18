// const express = require('express');

// const Advertisement = require('../models/advertisementModel');

// const router = express.Router();

// // POST route for adding a new advertisement
// router.post('/post-advertisement', async (req, res) => {
//   const { title, description, imageUrl } = req.body;

//   if (!title || !description || !imageUrl) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     // Create a new advertisement object
//     const newAdvertisement = new Advertisement({
//       title,
//       description,
//       imageUrl,
//     });

//     // Save the new advertisement to the database
//     await newAdvertisement.save();

//     // Respond with the added advertisement
//     res.status(201).json(newAdvertisement);
//   } catch (error) {
//     console.error('Error adding advertisement:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;


const express = require('express');
const Advertisement = require('../models/advertisementModel');  
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, description, imageUrl } = req.body;

        // Create a new advertisement
        const advertisement = new Advertisement({ title, description, imageUrl });

        // Save the advertisement to the database
        await advertisement.save();

        // Send a success response
        res.status(200).json({
            status: 'success',
            data: {
                advertisement
            }
        });
    } catch (err) {
        let errorMessage;

        if (err.name === 'ValidationError') {
            // Handle Mongoose validation error
            errorMessage = Object.values(err.errors).map(val => val.message).join(', ');
        } else {
            // Generic error message
            errorMessage = err.message;
        }

        // Send a failed response
        res.status(500).json({
            status: 'failed',
            message: errorMessage
        });
    }
});

module.exports = router;
