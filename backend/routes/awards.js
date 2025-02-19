const express = require("express");
const router = express.Router();
const Experience = require("../models/Award");
const Award = require("../models/Award");

router.get("/",async (req,res) => {
    try {
        const awards = await Award.find()
        res.status(200).json(awards)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/",async (req,res) => {
    try {
        const award = new Award(req.body)
        award.save()
        res.status(200).json(award)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

module.exports = router;