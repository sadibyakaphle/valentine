const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const celebration = document.getElementById("celebration");
const card = document.getElementById("card");
const music = document.getElementById("music");
const heartsContainer = document.getElementById("hearts-container");

let noCount = 0;

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  document.body.style.background =
    "linear-gradient(135deg, #ff9acb, #ffdde1)";
  celebration.classList.remove("hidden");
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  question.style.display = "none";

  music.play();
  startHearts();
});

/* NO BUTTON */
noBtn.addEventListener("click", () => {
  noCount++;
  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 400);

  question.textContent = "Are you sure bubu? 😭💔";
  document.body.style.background =
    "linear-gradient(135deg, #ffd1de, #ff91e2)";

  // Move & shrink No button
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${1 - noCount * 0.1})`;

  if (noCount > 2) {
    question.textContent = "Mai ho la timro k kaa No ne yes press gara😈💘";
  }
});

/* Floating hearts */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
