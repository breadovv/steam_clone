import { request } from "./api.js";

document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const data = await request("/auth/login", "POST", { email, password });
  localStorage.setItem("token", data.token);
  location.href = "profile.html";
});
