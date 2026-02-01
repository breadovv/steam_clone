const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  purchaseDate: Date,
  hoursPlayed: { type: Number, default: 0 }
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, default: "user" },
  library: [LibrarySchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
