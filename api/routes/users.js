const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { pool } = require("../db");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Токен не передан" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Невалидный токен" });
    }
    req.user = user;
    next();
  });
};

router.get("/", authenticateToken, async (req, res) => {
  try {
    const users = await pool.query("SELECT id, email FROM users");
    res.json(users.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
