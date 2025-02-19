const express = require("express");
const router = express.Router();
const Experience = require("../models/Interest");
const Interest = require("../models/Interest");


router.get("/",async (req,res) => {
    try {
        const interests = await Interest.find()
        res.status(200).json(interests) 
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/",async (req,res) => {
    try {
        const interest = new Interest(req.body)
        interest.save()
        res.status(200).json(interest)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

module.exports = router;