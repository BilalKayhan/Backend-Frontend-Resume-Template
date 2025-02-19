const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

router.get("/",async (req,res) => {
    try {
        const educations = await Education.find()
        res.status(200).json(educations)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/",async (req,res) => {
    try {
        const education = new Education(req.body)
        education.save()
        res.status(200).json(education)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."}) 
    }
})

module.exports = router;