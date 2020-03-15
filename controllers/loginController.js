const jwt = require("jsonwebtoken");
const {getWaterLevel} = require("./commandController");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.redirect("back");
  } else {
    if (username === "admin" && password === "admin") {
      const token = jwt.sign({}, process.env.SECRET);

      res.cookie("token", token, { maxAge: 86400000 + Date.now() });
      res.redirect("/home");
    } else {
      res.redirect("back");
    }
  }
};

exports.findPage = async (req, res) => {
  if (req.cookies.token) {
    res.redirect("/home");
  } else {
    res.redirect("/login");
  }
};

exports.loginPage = async (req, res) => {
  res.render("login", { layout: false });
};

exports.waterLevel = async (req, res)=>{
  res.json({
    tankStatus: getWaterLevel() < 100 ? "Not Full, Motor Running" : "Full, Motor Stopped",
  })
}

exports.homePage = async (req, res) => {
  res.render("home", {
    tankStatus: getWaterLevel() < 100 ? "Not Full, Motor Running" : "Full, Motor Stopped",

  });
};

exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
