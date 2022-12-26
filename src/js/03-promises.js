const form = document.querySelector('.form');

const btn = document.querySelector('button');

form.addEventListener('submit', submitt);

function submitt(event) {
  event.preventDefault();

  const formEl = event.currentTarget;

  let delayInput = Number(formEl.delay.value);
  const stepInput = Number(formEl.step.value);
  const amountInput = Number(formEl.amount.value);

  for (let position = 1; position <= amountInput; position++) {
    createPromise(position, delayInput)
      .then(value => {
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
    delayInput += stepInput;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`); // Fulfill
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`); // Reject
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
