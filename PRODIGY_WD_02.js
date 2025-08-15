let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function stop() {
  running = false;
  clearInterval(timer);
}

function reset() {
  stop();
  seconds = 0;
  updateDisplay();
}
