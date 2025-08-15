let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

function timeToString(time) {
  let ms = time % 1000;
  let totalSeconds = Math.floor(time / 1000);
  let seconds = totalSeconds % 60;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let hours = Math.floor(totalSeconds / 3600);

  return (
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(ms).padStart(3, '0')
  );
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 10);
    running = true;
  }
}

function pauseResume() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  } else {
    startStop();
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  running = false;
  display.textContent = "00:00:00.000";
  lapsList.innerHTML = "";
}

function recordLap() {
  if (!running) return;
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
  lapsList.appendChild(lapItem);
}

