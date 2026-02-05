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
      .map(g => `
        <div class="game-card" style="border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px;">
          <img src="${g.image || '/img/no-image.png'}" 
               alt="${g.title}" 
               style="width: 100%; max-width: 300px; height: auto; border-radius: 4px; display: block; margin-bottom: 10px;"
               onerror="this.src='/img/no-image.png';">
          <h3>${g.title}</h3>
          <p><strong>Цена:</strong> ${g.price} $</p>
          <p><strong>Жанры:</strong> ${g.genres.join(", ")}</p>
          <p>${g.description.substring(0, 100)}...</p>
        </div>
      `)
      .join("");
  })
  .catch(err => {
    console.error("Ошибка при получении данных:", err);
    const container = document.getElementById("games");
    if (container) {
      container.innerHTML = "<p>Не удалось загрузить данные.</p>";
    }
  });