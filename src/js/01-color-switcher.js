const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const backGround = document.querySelector('body');
let id = 0;

startButton.addEventListener('click', () => {
  const chengeColor = setInterval(() => {
    const color = getRandomHexColor();
    backGround.style.backgroundColor = color;
    id = chengeColor;
  }, 1000);
  startButton.setAttribute('disabled', true);
});

stopButton.addEventListener('click', () => {
  clearInterval(id);
  startButton.removeAttribute('disabled', true);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
