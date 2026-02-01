const Review = require("../models/Review");

exports.add = async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
};

exports.byGame = async (req, res) => {
  const reviews = await Review.find({ gameId: req.params.gameId });
  res.json(reviews);
};

exports.ratingStats = async (req, res) => {
  const stats = await Review.aggregate([
    { $match: { gameId: require("mongoose").Types.ObjectId(req.params.gameId) } },
    {
      $group: {
        _id: "$gameId",
        avgRating: { $avg: "$rating" },
        count: { $sum: 1 }
      }
    }
  ]);
  res.json(stats);
};
