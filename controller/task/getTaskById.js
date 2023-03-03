const pool = require("../../db");

const getTaskById = async (req, res) => {
  try {
    const { task_id } = req.params;
    const task = await pool.query(
      "SELECT * FROM task_table WHERE task_id = $1",
      [task_id]
    );
    res.status(200).json(task.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = getTaskById;
