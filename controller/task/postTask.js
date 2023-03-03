const pool = require("../../db");
require("dotenv").config();
const table = process.env.TASKTABLE;
const postTask = async (req, res) => {
  try {
    const { name } = req.body;
    const queryString = `INSERT INTO ${table} (task_name) VALUES ($1) RETURNING *`;
    const result = await pool.query(queryString, [name]);
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

module.exports = postTask;
