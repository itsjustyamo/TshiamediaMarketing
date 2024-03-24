const mongoose = require('mongoose');

const SocialMediaManagementSchema = new mongoose.Schema({
    package_name: {
        type: String
    },
    price:{
        type: Number
    } ,
    description: {
        type: String
    } ,
    need_service: {
        type: Boolean

}, })

// Create the model
module.exports = mongoose.model('SocialMediaManagement', SocialMediaManagementSchema);


