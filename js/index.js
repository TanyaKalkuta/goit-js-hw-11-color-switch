import colors from './arraycolors.js';

const TIME_INTERVAL = 1000;
let intervalId = null

const btnStart = document.querySelector('[data-action="start"]');
console.log(btnStart);
const btnStop = document.querySelector('[data-action="stop"]');
console.log(btnStop);


btnStart.addEventListener('click', onStartColorChenge);
btnStop.addEventListener('click', onStopColorChenge);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function onStartColorChenge() {
  intervalId = setInterval(bgrColorChange, TIME_INTERVAL)
  btnStart.setAttribute('disabled', true);
}

function onStopColorChenge () {
  clearInterval(intervalId);
  btnStart.removeAttribute('disabled');
}

function bgrColorChange() {
  const indexOfColors = randomIntegerFromInterval(0, colors.length-1);
  console.log(indexOfColors);
  console.log(colors[indexOfColors]);
  document.body.style.backgroundColor = colors[indexOfColors];
  // працюють обидва способи
  // document.body.setAttribute('style', `background-color:${colors[indexOfColors]}`)

}
