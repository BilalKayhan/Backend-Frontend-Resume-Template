const mongoose = require("mongoose");

const EducationSchema = mongoose.Schema(
    {
        school : {type: String, required: true},
        faculty : {type: String, required: true},
        section : {type: String, required: true},
        gpa : {type: String, required: true},
        startDate : {type: String, required: true},
        endDate : {type: String, required: true}
    }
)

const Education = mongoose.model("Education",EducationSchema);

module.exports = Education;