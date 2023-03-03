const pool = require("../db");

const qureyText = "SELECT * FROM task_table";

const home = async (req, res) => {
  try {
    const result = await pool.query(qureyText);
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
module.exports = home;
