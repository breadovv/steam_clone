const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

ReviewSchema.index({ gameId: 1, rating: -1 });

module.exports = mongoose.model("Review", ReviewSchema);
