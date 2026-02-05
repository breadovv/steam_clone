import { request } from "./api.js";

export const createOrder = (games, total) =>
  request("/orders", "POST", { games, total });

export const loadStats = async () => {
  const stats = await request("/orders/revenue");
  document.getElementById("stats").innerText =
    `Revenue: $${stats.totalRevenue}`;
};
