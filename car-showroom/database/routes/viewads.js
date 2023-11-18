const express = require('express');
const Advertisement = require('../models/advertisementModel');
const router = express.Router();

// GET single advertisement by ID
router.get('/:id', async (req, res) => {
    try {
        const advertisement = await Advertisement.findById(req.params.id);
        if (!advertisement) {
            return res.status(404).json({
                status: 'failed',
                message: 'Advertisement not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                advertisement,
            },
        });
    } catch (err) {
        console.error('Error fetching advertisement:', err);
        res.status(500).json({
            status: 'failed',
            message: 'Internal Server Error',
        });
    }
});

module.exports = router;
