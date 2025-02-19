const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema(
    [
        {
            icon: {type: String, required: false},
            workflow: {type: String, required: false},
            tik: {type: String, required: false}
        }
    ]
)

const Skill = mongoose.model("Skill",SkillSchema);

module.exports = Skill;