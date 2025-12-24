/* TAP TO OPEN + MUSIC */
const tapScreen = document.getElementById("tapScreen");
const mainContent = document.querySelector(".coming-soon");
const ytMusic = document.getElementById("ytMusic");

tapScreen.addEventListener("click", () => {
  // 🎵 YouTube Happy Birthday Music
  // You can change VIDEO ID if you want
  ytMusic.src =
    "https://www.youtube.com/embed/90g60l-0jYc?autoplay=1&loop=1&playlist=90g60l-0jYc";

  tapScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

/* COUNTDOWN DATE (CHANGE THIS) */
// Example: 4 January 2026
const birthdayDate = new Date(2026, 0, 4, 0, 0, 0);

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthdayDate - now;

  if (diff <= 0) {
    mainContent.innerHTML = `
      <h1 class="neon-text">🎉 HAPPY BIRTHDAY 🎉</h1>
      <p class="sub">
        Today the world got brighter 🤍<br>
        You are truly special ✨
      </p>
      <p class="footer">— Always cheering for you 💖</p>
    `;
    return;
  }

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();
