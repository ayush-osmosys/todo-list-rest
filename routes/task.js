const deleteTask = require("../controller/task/deleteTask");
const getAllTask = require("../controller/task/getAllTask");
const getTaskById = require("../controller/task/getTaskById");
const postTask = require("../controller/task/postTask");
const updateTask = require("../controller/task/updateTask");

const router = require("express").Router();

router.get("/task", getAllTask);
router.post("/task", postTask);
router.get("/task/:task_id", getTaskById);
router.patch("/task/:task_id", updateTask);
router.delete("/task/:task_id", deleteTask);

module.exports = router;
