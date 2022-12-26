const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const backGround = document.querySelector('body');
let id = 0;

chengeColorStarted = true;

startButton.addEventListener('click', () => {
  if (chengeColorStarted) {
    const chengeColor = setInterval(() => {
      const color = getRandomHexColor();
      backGround.style.backgroundColor = color;
      id = chengeColor;
      console.log(chengeColorStarted);
    }, 1000);
    chengeColorStarted = false;
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(id);
  chengeColorStarted = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
