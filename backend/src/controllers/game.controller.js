const Game = require("../models/Game");

exports.create = async (req, res) => {
  const game = await Game.create(req.body);
  res.json(game);
};

exports.getAll = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

exports.getOne = async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
};

exports.update = async (req, res) => {
  const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(game);
};

exports.remove = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
