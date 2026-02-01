const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  genres: [String],
  tags: [String],
  developer: String,
  publisher: String,
  createdAt: { type: Date, default: Date.now }
});

GameSchema.index({ title: "text", tags: 1 });

module.exports = mongoose.model("Game", GameSchema);
