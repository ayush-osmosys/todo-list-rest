const home = require("../../controller/task/getAllTask");

const router = require("express").Router();

router.get("/", home);

module.exports = router;
