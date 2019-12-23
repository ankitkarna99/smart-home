exports.parseCommands = async (req, res) => {
  try {
    const command = req.params.command;

    if (command === "turn on lights") {
      console.log("turning on lights");
      //TODO: Implement turn on lights logic
    } else if (command === "turn off lights") {
      console.log("turning off lights");
      //TODO: Implement turn off lights logic
    }

    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
};
