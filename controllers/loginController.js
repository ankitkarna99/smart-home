const jwt = require("jsonwebtoken");

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

exports.homePage = async (req, res) => {
  res.render("home");
};

exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
