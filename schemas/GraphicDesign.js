const mongoose = require('mongoose');

const graphicDesignSchema = new mongoose.Schema({
  package_name: String,
  price: Number,
  description: String,
  need_service: Boolean,
}, { collection: 'Graphic_Design' });

const GraphicDesign = mongoose.model('GraphicDesign', graphicDesignSchema);

// const newGraphicDesignService = new GraphicDesign({
//   package_name: "Basic Graphic Design Package",
//   price: 799,
//   description: "Essential graphic design services including logo design, brand identity, and marketing materials.",
//   need_service: "yes"
// });

// newGraphicDesignService.save()
//   .then((result) => {
//     console.log('Service added successfully:', result);
//   })
//   .catch((error) => {
//     console.error('Error adding service:', error);
//   });

module.exports = GraphicDesign;
