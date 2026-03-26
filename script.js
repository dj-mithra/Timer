let interval;
let seconds = 0;
let isRunning = false;

function startTimer() {
  let display = document.getElementById("display");

  if (isRunning) {
    return;
  }


  if (seconds === 0) {
    let mins = parseInt(document.getElementById("minutesInput").value) || 0;
    let secs = parseInt(document.getElementById("secondsInput").value) || 0;

    seconds = mins * 60 + secs;
  }

  if (seconds <= 0) {
    display.innerText = "Enter valid time!";
    return;
  }

  isRunning = true;

  interval = setInterval(() => {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    display.innerText =

      String(mins).padStart(2, '0') + ":" +
      String(secs).padStart(2, '0');

    if (seconds === 0) {
      clearInterval(interval);
      display.innerText = " Done!";
      isRunning = false;
      return;
    }

    seconds--;

  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}
function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  isRunning = false;
  document.getElementById("display").innerText = "00:00";
}