const mongoose = require("mongoose");


const InterestSchema = mongoose.Schema(
    {
        description1 : {type: String, required: true},
        description2 : {type: String, required: true}
    }
)

const Interest = mongoose.model("Interest",InterestSchema);

module.exports = Interest;