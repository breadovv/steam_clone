const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Доступ запрещен. Токен отсутствует." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Данные пользователя теперь доступны в контроллерах через req.user
    next();
  } catch (err) {
    return res.status(403).json({ message: "Неверный или просроченный токен." });
  }
};