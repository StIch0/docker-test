require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

initializeDatabase();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
