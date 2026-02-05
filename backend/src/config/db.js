const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    try {
      await mongoose.connection.collection('games').dropIndexes();
    } catch (indexErr) {}

  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};