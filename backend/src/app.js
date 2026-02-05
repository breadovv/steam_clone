const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../../frontend")));

app.use("/api/games", require("./routes/game.routes"));
app.use("/api/reviews", require("./routes/review.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/uploads", require("./routes/upload.routes"));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.use((req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

module.exports = app;
