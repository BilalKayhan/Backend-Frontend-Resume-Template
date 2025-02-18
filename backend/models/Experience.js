const mongoose = require("mongoose");

const ExperienceSchema = mongoose.Schema(
    {
        job: {type: String, required: true},
        department: {type: String, required: true},
        description: {type: String, required: true},
        startDate: {type: String, required: true},
        endDate: {type: String, required: true}
    }
)

const Experience = mongoose.model("Experience",ExperienceSchema);

module.exports = Experience;