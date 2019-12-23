const router = require("express").Router();
const auth = require("../middlewares/auth");
const commandController = require("../controllers/commandController");

router.get("/:command", auth, commandController.parseCommands);

module.exports = router;
