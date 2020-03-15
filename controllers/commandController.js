var five = require("johnny-five");
var board = new five.Board();

var relay = false;
var waterLevel = false;
var value = 0;

board.on("ready", function () {
  // Create a standard `led` component instance
  // led = new five.Led(13);
  relay = new five.Relay(2);

  this.repl.inject({
    relay: relay
  });

  waterLevel = new five.Sensor("A0");

  // console.log(waterLevel.value);

  waterLevel.on("change", function () {
    // <100 not full turn on
    // >100 <200 
    // >200 full
    value = this.value;

  });



  // var temp = new five.Thermometer({
  //   controller: "DHT11_I2C_NANO_BACKPACK",
  // });

  // temp.on("change", function () {
  //   console.log("temperature");
  //   console.log("  celsius           : ", this.celsius);
  //   console.log("  fahrenheit        : ", this.fahrenheit);
  //   console.log("  kelvin            : ", this.kelvin);
  //   console.log("--------------------------------------");
  // });

});

exports.getWaterLevel = () => {

  return value;
};

exports.parseCommands = async (req, res) => {
  try {
    const command = req.params.command;

    if (command === "turn on lights") {
      console.log("turning on lights");
      if (relay) relay.on();
    } else if (command === "turn off lights") {
      console.log("turning off lights");
      if (relay) relay.off();
    }

    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
};
