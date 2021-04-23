const Gpio = require('onoff').Gpio;
const led = new Gpio(21, 'out');
// const button = new Gpio(4, 'in', 'both');

// button.watch((err, value) => {
//   if (err) {
//     throw err;
//   }

//   led.writeSync(value);
// });

process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});

async function init() {
  led.writeSync(1);
  await sleep(1000);
  led.writeSync(0);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

init();
