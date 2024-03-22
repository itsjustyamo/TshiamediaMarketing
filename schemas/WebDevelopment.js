const mongoose = require('mongoose');

const webDevelopmentSchema = new mongoose.Schema({
    package_name: String,
    price: Number,
    description: String,
    need_service: Boolean,
}, { collection: 'Web_Development' });

const WebDevelopment = mongoose.model('WebDevelopment', webDevelopmentSchema);

// const newWebDevelopmentService = new WebDevelopment({
//   package_name: "Basic Web Development Package",
//   price: 999,
//   description: "Essential web development services including website design, development, and optimization.",
//   need_service: "yes"
// });

// newWebDevelopmentService.save()
//   .then((result) => {
//     console.log('Service added successfully:', result);
//   })
//   .catch((error) => {
//     console.error('Error adding service:', error);
//   });

module.exports = WebDevelopment;
