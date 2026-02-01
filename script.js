const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 300;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1>Yayyy!! 💕 I knew it 😍</h1>";
});
