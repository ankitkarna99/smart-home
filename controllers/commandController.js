var five = require("johnny-five");
var board = new five.Board();

var led = false;

board.on("ready", function() {
  // Create a standard `led` component instance
  led = new five.Led(13);
});

exports.parseCommands = async (req, res) => {
  try {
    const command = req.params.command;

    if (command === "turn on lights") {
      console.log("turning on lights");
      if (led) led.on();
    } else if (command === "turn off lights") {
      console.log("turning off lights");
      if (led) led.off();
    }

    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
};
