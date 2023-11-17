const mongoose = require('mongoose');

// Define the schema for the Advertisement model
const advertisementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create the Advertisement model
const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;
