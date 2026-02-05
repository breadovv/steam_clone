const express = require("express");
const router = express.Router();

const {
  createOrder,
  getUserOrders,
  getRevenueStats
} = require("../controllers/order.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// создать заказ
router.post("/", authMiddleware, createOrder);

// получить заказы пользователя
router.get("/my", authMiddleware, getUserOrders);

// агрегация (для защиты — очень важно)
router.get("/revenue", getRevenueStats);

module.exports = router;
