import User from "../models/User.js";

export const addToLibrary = async (req, res) => {
  const { gameId } = req.body;

  await User.updateOne(
    { _id: req.user.id },
    { $push: { library: { game: gameId } } }
  );

  res.json({ message: "Game added to library" });
};

export const updateHours = async (req, res) => {
  const { gameId, hours } = req.body;

  await User.updateOne(
    { _id: req.user.id, "library.game": gameId },
    { $inc: { "library.$.hoursPlayed": hours } }
  );

  res.json({ message: "Hours updated" });
};

export const removeFromLibrary = async (req, res) => {
  const { gameId } = req.body;

  await User.updateOne(
    { _id: req.user.id },
    { $pull: { library: { game: gameId } } }
  );

  res.json({ message: "Game removed" });
};
