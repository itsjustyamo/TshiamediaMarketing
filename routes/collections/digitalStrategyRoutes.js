const express = require('express');
const router = express.Router();
const DigitalStrategy = require('../../schemas/DigitalStrategy');

//Create route
router.post('/', async (req, res) => {
    try {
    let newDigitalStrategy = new DigitalStrategy(req.body)
    await newDigitalStrategy.save()
    res.json(newDigitalStrategy)
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/', async (req, res) => {
    try {
        const allServices = await DigitalStrategy.find({})
 res.json(allServices)
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const DigitalStrategy = db.model('Digital_Strategy');
        const id = req.params.id;
        const updatedData = req.body;
        await DigitalStrategy.findByIdAndUpdate(id, updatedData);
        res.status(200).send("Data updated successfully");
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const DigitalStrategy = db.model('Digital_Strategy');
        const id = req.params.id;
        await DigitalStrategy.findByIdAndDelete(id);
        res.status(200).send("Data deleted successfully");
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

