import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const { games, total } = req.body;

  const order = await Order.create({
    user: req.user.id,
    games,
    total,
    createdAt: new Date()
  });

  res.json(order);
};

export const getRevenueStats = async (req, res) => {
  const stats = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$total" },
        ordersCount: { $sum: 1 }
      }
    }
  ]);

  res.json(stats[0]);
};
