require("dotenv").config();

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("App is now listening ➡ " + process.env.PORT);
});




// const ClapDetector = require("clap-detector");

// var CONFIG = {
//   AUDIO_SOURCE: 'alsa default', // this is your microphone input. If you dont know it you can refer to this thread (http://www.voxforge.org/home/docs/faq/faq/linux-how-to-determine-your-audio-cards-or-usb-mics-maximum-sampling-rate)
//   DETECTION_PERCENTAGE_START: '5%', // minimum noise percentage threshold necessary to start recording sound
//   DETECTION_PERCENTAGE_END: '5%',  // minimum noise percentage threshold necessary to stop recording sound
//   CLAP_AMPLITUDE_THRESHOLD: 0.7, // minimum amplitude threshold to be considered as clap
//   CLAP_ENERGY_THRESHOLD: 0.3,  // maximum energy threshold to be considered as clap
//   MAX_HISTORY_LENGTH: 10 // all claps are stored in history, this is its max length
// }

// const clap = new ClapDetector.default(CONFIG);


// const disposableOneClapListener = clap.addClapsListener(claps => {
//   console.log("heard 1 clap", claps)
// }, { number: 2, delay: 0 });

// disposableOneClapListener();