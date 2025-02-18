const express = require("express");
const router = express.Router();

const navbarRoute = require("./navbars.js");
const aboutRoute = require("./abouts.js");
const experienceRoute = require("./experiences.js")


router.use("/navbar",navbarRoute);
router.use("/about",aboutRoute);
router.use("/experience",experienceRoute)



module.exports = router; 