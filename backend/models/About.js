const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema(
    {
        surname : {type: String, required: true},
        name : {type: String, required: true},
        address : {type: String, required: true},
        email : {type: String, required: true},
        description : {type: String, required: true}
    }
)

const About = mongoose.model("About",AboutSchema);

module.exports = About;