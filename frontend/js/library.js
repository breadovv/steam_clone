import { request } from "./api.js";

export const addToLibrary = (gameId) =>
  request("/library/add", "POST", { gameId });

export const updateHours = (gameId, hours) =>
  request("/library/update", "POST", { gameId, hours });

export const removeFromLibrary = (gameId) =>
  request("/library/remove", "POST", { gameId });
