const express = require("express");
const router = express.Router();

const {
  addToLibrary,
  removeFromLibrary,
  getUserLibrary
} = require("../controllers/library.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// получить библиотеку пользователя
router.get("/", authMiddleware, getUserLibrary);

// добавить игру
router.post("/add", authMiddleware, addToLibrary);

// удалить игру
router.delete("/remove/:gameId", authMiddleware, removeFromLibrary);

module.exports = router;
