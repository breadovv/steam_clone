const express = require("express");
const router = express.Router();
const upload = require("../multer"); 
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const client = new MongoClient(process.env.MONGO_URI);
let db;
client.connect().then(() => {
    db = client.db("nosql_final"); 
    console.log("MongoDB connected (upload route)");
});

router.post("/upload", upload.single("photo"), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const photoDoc = {
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`, 
        uploadedAt: new Date()
    };

    await db.collection("photos").insertOne(photoDoc);

    res.json({ message: "File uploaded successfully", file: photoDoc });
});

module.exports = router;
