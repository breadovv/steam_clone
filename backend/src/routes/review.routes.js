const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller");

router.post("/", reviewController.add);
router.get("/game/:gameId", reviewController.byGame);
router.get("/stats/:gameId", reviewController.ratingStats);

module.exports = router;
