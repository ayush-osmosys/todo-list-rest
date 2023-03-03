const getAllTask = require("../controller/task/getAllTask");
const getTaskById = require("../controller/task/getTaskById");
const postTask = require("../controller/task/postTask");

const router = require("express").Router();

router.get("/task", getAllTask);
router.post("/task", postTask);
router.get("/task/:task_id", getTaskById);

module.exports = router;
