require("dotenv").config();

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("App is now listening ➡ " + process.env.PORT);
});
