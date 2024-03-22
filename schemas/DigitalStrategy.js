const mongoose = require('mongoose');

// Define the schema
const digitalStrategySchema = new mongoose.Schema({
  package_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  need_service: {
    type: String,
    required: true
  }
}, { collection: 'Digital_Strategy' });

// Create the model
const DigitalStrategy = mongoose.model('DigitalStrategy', digitalStrategySchema);

// Create a new service instance
const newDigitalStrategyService = new DigitalStrategy({
  package_name: "Basic Digital Strategy Package",
  price: 699,
  description: "Essential digital strategy services including market analysis, goal setting, and strategic recommendations.",
  need_service: "yes"
});

// Save the new service to the database
newDigitalStrategyService.save()
  .then((result) => {
    console.log('Service added successfully:', result);
  })
  .catch((error) => {
    console.error('Error adding service:', error);
  });

// Export the model
module.exports = DigitalStrategy;
