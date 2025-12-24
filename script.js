// Birthday date: 4 January
const birthdayDate = new Date(2026, 0, 4, 0, 0, 0);

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthdayDate - now;

  if (diff <= 0) {
    document.querySelector(".coming-soon").innerHTML = `
      <h1>🎉 It's Time 🎉</h1>
      <p>Today is the special day 🤍</p>
    `;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
