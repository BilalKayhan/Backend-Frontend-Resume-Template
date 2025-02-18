const mongoose = require("mongoose");

const NavbarSchema = mongoose.Schema(
    {
        name : {type: String, required: true}
    }
);

const Navbar = mongoose.model("Navbar",NavbarSchema);

module.exports = Navbar;