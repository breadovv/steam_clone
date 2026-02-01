const User = require("../models/User");
const jwt = require("jsonwebtoken");

/**
 * РЕГИСТРАЦИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ
 */
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        message: "Пользователь с таким email уже зарегистрирован" 
      });
    }

    const newUser = new User({
      username,
      email,
      password 
    });

    await newUser.save();

    res.status(201).json({ 
      message: "Аккаунт успешно создан! Теперь вы можете войти." 
    });
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    res.status(500).json({ message: "Произошла ошибка на сервере при создании аккаунта" });
  }
};

/**
 * АВТОРИЗАЦИЯ (ЛОГИН)
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Неверный логин или пароль" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Неверный логин или пароль" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" } 
    );

    res.status(200).json({
      message: "Вход выполнен успешно",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Ошибка при логине:", error);
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
};