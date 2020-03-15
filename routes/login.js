const router = require("express").Router();
const auth = require("../middlewares/auth");
const loginController = require("../controllers/loginController");

router.get("/", auth, loginController.findPage);
router.get("/logout", loginController.logoutUser);
router.get("/home", auth, loginController.homePage);
router.get("/login", loginController.loginPage);
router.post("/login", loginController.loginUser);
router.get("/waterLevel", auth, loginController.waterLevel);

module.exports = router;
