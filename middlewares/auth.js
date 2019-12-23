const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, process.env.SECRET);

    next();
  } catch (err) {
    res.clearCookie("token");
    res.redirect("/login");
  }
};
