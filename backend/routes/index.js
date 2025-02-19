const express = require("express");
const router = express.Router();

const navbarRoute = require("./navbars.js");
const aboutRoute = require("./abouts.js");
const experienceRoute = require("./experiences.js")
const educationRoute = require("./educations.js")
const skillRoute = require("./skills.js")
const interestRoute = require("./interests.js")
const awardRoute = require("./awards.js")

router.use("/navbar",navbarRoute);
router.use("/about",aboutRoute);
router.use("/experience",experienceRoute)
router.use("/education",educationRoute)
router.use("/skill",skillRoute)
router.use("/interest",interestRoute)
router.use("/award",awardRoute)

module.exports = router; 