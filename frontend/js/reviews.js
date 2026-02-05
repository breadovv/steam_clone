import { request } from "./api.js";

export const loadReviews = async (gameId) => {
  const reviews = await request(`/reviews/game/${gameId}`);
  console.log(reviews);
};
