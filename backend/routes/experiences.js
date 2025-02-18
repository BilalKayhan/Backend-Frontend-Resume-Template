const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience")


router.get("/",async (req,res) => {
    try {
        const experiences = await Experience.find()
        res.status(200).json(experiences)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/" ,async (req,res) => {
    try {
        const experience = new Experience(req.body)
        experience.save()
        res.status(200).json(experience)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

module.exports = router;