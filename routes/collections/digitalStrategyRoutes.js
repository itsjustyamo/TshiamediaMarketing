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

//Read route
router.get('/', async (req, res) => {
    try {
        const allServices = await DigitalStrategy.find()
        console.log(allServices)
 res.json(allServices)
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send("Internal Server Error");
    }
});


//Update route
router.put('/:id', async (req, res) => {
    try {
        const updatedDigitalStrategy = await DigitalStrategy.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }

        );
        res.send(updatedDigitalStrategy)
        } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json("Internal Server Error");
    }
});

//Delete route
router.delete('/:id', async (req, res)=>{
       try {
       res.status(200).json({ msg: 'Digital Strategy Deleted'})

       } catch (error) {
        console.error(error)
         res.status(500).json({msg: "Server Error"})
     }
    })

module.exports = router;

