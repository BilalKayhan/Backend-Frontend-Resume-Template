const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const mainRoute = require("./routes/index");

dotenv.config()

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api",mainRoute);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb bağlantısı başarılı...")
    } catch (error) {
        throw error;
    }
}

app.get("/", (req,res) => {
    res.send("Server JS")
})

app.listen(PORT, () => {
    connect();
    console.log(`Server ${PORT} portu üzerinden yayında...`)
})

