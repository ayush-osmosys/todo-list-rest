const getAllTask = require("../controller/task/getAllTask");
const postTask = require("../controller/task/postTask");

const router = require("express").Router();

router.get("/task", getAllTask);
router.post("/task", postTask);

module.exports = router;
