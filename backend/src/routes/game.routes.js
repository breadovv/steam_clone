
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game.controller");


router.post("/", gameController.create);
router.get("/", gameController.getAll);
router.get("/:id", gameController.getOne);
router.put("/:id", gameController.update);
router.delete("/:id", gameController.remove);

module.exports = router;
