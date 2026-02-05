const API_URL = "http://localhost:5000/api";

export const request = async (url, method = "GET", data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(API_URL + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    body: data ? JSON.stringify(data) : null
  });

  return res.json();
};
 