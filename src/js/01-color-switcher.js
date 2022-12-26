const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const backGround = document.querySelector('body');
let id = 0;

startButton.addEventListener('click', () => {
  id = setInterval(() => {
    const color = getRandomHexColor();
    backGround.style.backgroundColor = color;
  }, 1000);
  // startButton.setAttribute('disabled', true);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(id);
  // startButton.removeAttribute('disabled', true);
  startButton.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
