class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    this.getRefs();
  }
  start() {
  const intervalId = setInterval(() => {
    const deltaTime = this.targetDate - Date.now();
    const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
    this.updateTimerFace({ days, hours, mins, secs });
    this.stop({ days, hours, mins, secs }, intervalId);
   }, 1000);
  }
  stop({ days, hours, mins, secs }, intervalId) {
    // console.log(intervalId);
    if (days === '00' && hours === '00' && mins === '00' && secs === '00') {
    clearInterval(intervalId)
    }
  }
  getRefs() {
    const elRef = document.querySelector(this.selector);
    return {
    daysRef: elRef.querySelector('[data-value="days"]'),
    hoursRef: elRef.querySelector('[data-value="hours"]'),
    minsRef: elRef.querySelector('[data-value="mins"]'),
    secsRef: elRef.querySelector('[data-value="secs"]'),
    }
  }
  updateTimerFace({ days, hours, mins, secs }) {
    this.getRefs().daysRef.textContent = days;
    this.getRefs().hoursRef.textContent = hours;
    this.getRefs().minsRef.textContent = mins;
    this.getRefs().secsRef.textContent = secs;
  }
  pad(value) {
  return String(value).padStart(2, '0')
  }
  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  return {days, hours, mins, secs}
}
};

new CountdownTimer({selector: '#timer-1',
    targetDate: new Date('August 23, 2021'),})

// const refs = {
//   daysRef: document.querySelector('[data-value="days"]'),
//   hoursRef: document.querySelector('[data-value="hours"]'),
//   minsRef: document.querySelector('[data-value="mins"]'),
//   secsRef: document.querySelector('[data-value="secs"]'),
// };

// const targetDate = new Date('August 23, 2021').getTime();
// let time = targetDate - Date.now();
// // console.log(time);
// // console.log(targetDate);
// function pad(value) {
//   return String(value).padStart(2, '0')
// };

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return {days, hours, mins, secs}
// };

// function updateTimerFace({ days, hours, mins, secs }) {
//   if (days === '00' && hours === '00' && mins === '00' && secs === '00') {
//     clearInterval(intervalId)
//   } else {
//     refs.daysRef.textContent = days;
//     refs.hoursRef.textContent = hours;
//     refs.minsRef.textContent = mins;
//     refs.secsRef.textContent = secs;
//   }
 
// };


// const intervalId = setInterval(() => {
//   const deltaTime = targetDate - Date.now();
//   const { days, hours, mins, secs } = getTimeComponents(deltaTime);
//   updateTimerFace({ days, hours, mins, secs })
// }, 1000);
