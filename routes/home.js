const home = require("../controller/home");

const router = require("express").Router();

router.get("/", home);

module.exports = router;
