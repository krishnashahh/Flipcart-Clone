// Set the countdown timer (e.g., 2 hours)
let countdownTime = 2 * 60 * 60; // 2 hours in seconds

function updateTimer() {
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  if (countdownTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "Sale Ended!";
  } else {
    countdownTime--;
  }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
