const mongoose = require("mongoose");


const AwardSchema = mongoose.Schema(
    {
        icon : {type: String, required: true},
        certificate : {type: String, required: true}
    }
)

const Award = mongoose.model("Award",AwardSchema);

module.exports = Award;