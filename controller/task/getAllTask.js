const pool = require("../../db");

const qureyText = "SELECT * FROM task_table";

const getAllTask = async (req, res) => {
  try {
    const result = await pool.query(qureyText);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
module.exports = getAllTask;
