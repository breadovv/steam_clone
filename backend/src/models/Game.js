const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  genres: [String],
  tags: [String],
  developer: String,
  publisher: String,
  image: String, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Game", GameSchema);
