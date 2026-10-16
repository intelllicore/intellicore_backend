
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/intellicore";

app.get("/health", (req, res) => {
    res.status(200).send("success");
});

async function startServer() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

startServer();
