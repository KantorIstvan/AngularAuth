const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const pool = require("../config/db");

router.get("/dashboard", authenticateToken, async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      req.user.userId,
    ]);
    res.json({ message: `Welcome ${user.rows[0].email}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
