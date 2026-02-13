const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

const teaser = document.getElementById("memoriesTeaser");

yesBtn.addEventListener("click", () => {
  document.querySelector(".hero").style.display = "none";
  result.classList.remove("hidden");
  teaser.classList.remove("hidden");
});


// Floating hearts generator
const hearts = document.querySelector(".hearts");

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (15 + Math.random() * 25) + "px";
  hearts.appendChild(heart);
}
const enterBtn = document.getElementById("enterBtn");
const introScreen = document.getElementById("introScreen");
const mainPage = document.getElementById("mainPage");

enterBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  mainPage.classList.remove("hidden");
});
