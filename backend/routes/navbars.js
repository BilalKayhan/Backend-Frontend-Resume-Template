const express = require("express");
const router = express.Router();
const Navbar = require("../models/Navbar");

router.get("/", async (req,res) => {
    try {
        const navbars = await Navbar.find();
        res.status(200).json(navbars)
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

router.post("/",async (req,res) => {
    try {
        const navbar = new Navbar(req.body)
        navbar.save()
        res.status(200).json(navbar) 
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})

module.exports = router;