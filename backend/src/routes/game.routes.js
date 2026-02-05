const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game.controller");
const upload = require("../multer");
const Game = require("../models/Game");

router.get("/", async (req, res) => {
  const games = await Game.find().sort({ createdAt: -1 });
  res.json(games);
});

router.get("/:id", gameController.getOne);
router.put("/:id", gameController.update);
router.delete("/:id", gameController.remove);

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const game = new Game({
      title: req.body.title,
      price: Number(req.body.price),
      description: req.body.description,
      genres: req.body.genres ? req.body.genres.split(",").map(g => g.trim()) : [],
      tags: req.body.tags ? req.body.tags.split(",").map(t => t.trim()) : [],
      developer: req.body.developer,
      publisher: req.body.publisher,
      image: req.file ? `/uploads/games/${req.file.filename}` : null
    });

    await game.save();
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;