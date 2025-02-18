const express = require("express");
const router = express.Router();
const About = require("../models/About");

router.get("/",async (req,res) => {
    try {
        const abouts = await About.find()
        res.status(200).json(abouts)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/",async (req,res) => {
    try {
        const about = new About(req.body)
        about.save()
        res.status(200).json(about)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

module.exports = router;