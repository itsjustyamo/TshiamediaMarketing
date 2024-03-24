const express = require('express');
const router = express.Router();
const WebDevelopment = require('../../schemas/WebDevelopment');
//Create route
router.post('/', async (req, res) => {
    try {
    let newWebDevelopment = new WebDevelopment(req.body)
    await newWebDevelopment.save()
    res.json(newWebDevelopment)
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");
    }
});

//Read route
router.get('/', async (req, res) => {
    try {
        const allServices = await WebDevelopment.find({})
 res.json(allServices)
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send("Internal Server Error");
    }
});


//Update route
router.put('/:id', async (req, res) => {
    try {
        const updatedWebDevelopment = await WebDevelopment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }

        );
        res.send(updatedWebDevelopment)
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
