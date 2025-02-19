const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

router.get("/",async (req,res) => {
    try {
        const skills = await Skill.find()
        res.status(200).json(skills)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/",async (req,res) => {
    try {
        const skill = new Skill(req.body)
        skill.save()
        res.status(200).json(skill)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

module.exports = router;