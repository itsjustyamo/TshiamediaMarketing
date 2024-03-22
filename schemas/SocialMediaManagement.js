const mongoose = require('mongoose');

const socialMediaManagementSchema = new mongoose.Schema({
    package_name: String,
    price: Number,
    description: String,
    need_service: Boolean,
}, { collection: 'Social_Media_Management' });

const SocialMediaManagement = mongoose.model('SocialMediaManagement', socialMediaManagementSchema);

// const newSocialMediaManagementService = new SocialMediaManagement({
//   package_name: "Basic Social Media Management Package",
//   price: 899,
//   description: "Essential social media management services including account setup, content creation, and community engagement.",
//   need_service: "yes"
// });

// newSocialMediaManagementService.save()
//   .then((result) => {
//     console.log('Service added successfully:', result);
//   })
//   .catch((error) => {
//     console.error('Error adding service:', error);
//   });

module.exports = SocialMediaManagement;
