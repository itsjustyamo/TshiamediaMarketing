const mongoose = require('mongoose');

const graphicDesignSchema = new mongoose.Schema({
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
}, { collection: 'Graphic_Design' });

const GraphicDesign = mongoose.model('GraphicDesign', graphicDesignSchema);

const newGraphicDesignService = new GraphicDesign({
  package_name: "Basic Graphic Design Package",
  price: 799,
  description: "Essential graphic design services including logo design, brand identity, and marketing materials.",
  need_service: "yes"
});

newGraphicDesignService.save()
  .then((result) => {
    console.log('Service added successfully:', result);
  })
  .catch((error) => {
    console.error('Error adding service:', error);
  });

module.exports = GraphicDesign;
