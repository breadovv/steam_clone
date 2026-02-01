
fetch("/api/games")
  .then(r => {
    if (!r.ok) throw new Error("Ошибка сервера");
    return r.json();
  })
  .then(data => {
    const gamesContainer = document.getElementById("games");
    if (data.length === 0) {
      gamesContainer.innerHTML = "<p>Игр пока нет :(</p>";
      return;
    }
    gamesContainer.innerHTML = data
      .map(g => `<p><strong>${g.title}</strong> - ${g.price} KZT</p>`)
      .join("");
  })
  .catch(err => {
    console.error("Ошибка при получении данных:", err);
    document.getElementById("games").innerHTML = "<p>Не удалось загрузить данные.</p>";
  });