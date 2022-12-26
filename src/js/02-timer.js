import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btn = document.querySelector(' button[data-start]');
const inputDate = document.querySelector('#datetime-picker');
const time = document.querySelectorAll('.value');
const today = new Date();
let timeDifference = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (today - selectedDates[0] > 0) {
      btn.setAttribute('disabled', true);
      alert('Please choose a date in the future');
      // Notiflix.Notify.warning('Memento te hominem esse');
    } else {
      btn.removeAttribute('disabled', true);
      timeDifference = selectedDates[0].getTime() - today.getTime();
      convertMs(timeDifference);
    }
  },
};

const calendar = flatpickr(inputDate, options);

btn.addEventListener('click', chengeColor);

function chengeColor() {
  timer(timeDifference);
  btn.setAttribute('disabled', true);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timerDays = time[0];
  const timerHours = time[1];
  const timerMinutes = time[2];
  const timerSeconds = time[3];

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  timerDays.textContent = pad(days);
  timerHours.textContent = pad(hours);
  timerMinutes.textContent = pad(days);
  timerSeconds.textContent = pad(seconds);

  return { days, hours, minutes, seconds };
}

function timer(deadline) {
  let intervalId = 0;

  intervalId = setInterval(() => {
    const now = new Date();
    console.log(this.intervalId);

    timeDifference = calendar.selectedDates[0].getTime() - now.getTime();

    if (timeDifference > 0) {
      convertMs(timeDifference);
    } else {
      stop(intervalId);
    }
  }, 1000);
}
function stop() {
  clearInterval(intervalId);
}

function pad(value) {
  return String(value).padStart(2, 0);
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
