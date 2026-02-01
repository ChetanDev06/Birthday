/* =====================================================
   SMOOTH SCROLL
===================================================== */
function scrollToStory() {
  const story = document.getElementById("story");
  if (story) {
    story.scrollIntoView({ behavior: "smooth" });
  }
}

/* =====================================================
   SCROLL REVEAL
===================================================== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =====================================================
   TYPEWRITER EFFECT
===================================================== */
const typeTarget = document.getElementById("typewriter");
const typeText =
  "You are my safe place, my happiness, and my favorite part of every day. Thank you for being you. I love you endlessly 💖";

let typeIndex = 0;

function typeEffect() {
  if (!typeTarget) return;

  if (typeIndex < typeText.length) {
    typeTarget.textContent += typeText.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeEffect, 45);
  }
}

typeEffect();

/* =====================================================
   BACKGROUND FLOATING HEARTS
===================================================== */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.setProperty("--drift", Math.random());

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 18000);
}, 2200);

/* =====================================================
   PHOTO CLICK INTERACTION
===================================================== */
const photoCards = document.querySelectorAll(".photo-card");
const photoContainer = document.querySelector(".photos");

photoCards.forEach(card => {
  const textBox = card.querySelector(".photo-text");
  const text = card.dataset.text;

  card.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    // Reset all cards
    photoCards.forEach(c => c.classList.remove("active"));
    if (photoContainer) photoContainer.classList.remove("dim");

    // Activate clicked card
    if (!isActive) {
      card.classList.add("active");
      if (textBox) textBox.textContent = text;
      if (photoContainer) photoContainer.classList.add("dim");

      createPhotoHearts(card);
    }
  });
});

/* =====================================================
   PHOTO HEART BURST
===================================================== */
function createPhotoHearts(card) {
  const heartCount = 6;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "photo-heart";
    heart.textContent = "💗";

    // Random radial angle & distance
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 20;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);

    // Start near center but not identical
    heart.style.left = "50%";
    heart.style.top = "50%";

    card.appendChild(heart);

    setTimeout(() => heart.remove(), 1600);
  }
}


/* =====================================================
   HEART CURSOR (DESKTOP ONLY)
===================================================== */
if (!("ontouchstart" in window)) {
  const heartCursor = document.createElement("div");
  heartCursor.className = "heart-cursor";
  heartCursor.textContent = "💖";
  document.body.appendChild(heartCursor);

  window.addEventListener("mousemove", e => {
    heartCursor.style.left = e.clientX + "px";
    heartCursor.style.top = e.clientY + "px";
  });
}

/* =====================================================
   AMBIENT BACKGROUND HEART MOTION
===================================================== */
function createAmbientHeart() {
  const heart = document.createElement("div");
  heart.className = "ambient-heart";
  heart.textContent = "💗";

  const size = 12 + Math.random() * 14;          // 12–26px
  const opacity = 0.15 + Math.random() * 0.25;  // soft
  const duration = 18 + Math.random() * 12;     // slow
  const drift = (Math.random() * 80 - 40) + "px";

  heart.style.setProperty("--size", size + "px");
  heart.style.setProperty("--opacity", opacity);
  heart.style.setProperty("--duration", duration + "s");
  heart.style.setProperty("--left", Math.random() * 100 + "vw");
  heart.style.setProperty("--drift", drift);

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

/* Spawn gently (NOT too many) */
setInterval(createAmbientHeart, 2600);
