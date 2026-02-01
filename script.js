const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const heartsContainer = document.querySelector(".hearts");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="margin-top:150px; color:#b30059;">
      Yayyy Bullu!! 💕😍<br>
    Since you said yes, we have a date for <br><b>Laphing & Momo 🥟🍜</b><br><br>
      — Love, Bhanu 💖
    </h1>
  `;
});

// ❤️ Create floating hearts
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);
