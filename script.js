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
   COLLAGE GENERATOR
===================================================== */
function generateCollage() {
  const collageSection = document.getElementById("memories-collage");
  /* 
   * TO ADD PHOTOS:
   * 1. Add your photo files (jpg, png, etc.) to the 'images' folder.
   * 2. Add the filenames to this list below.
   * 
   * Want to test with random internet photos? Uncomment the lines below!
   */
  const images = [
    "Gallery/1.png",
    "Gallery/2.png",
    "Gallery/3.png",
    "Gallery/4.png",
    "Gallery/5.png",
    "Gallery/6.png",
    "Gallery/7.png",
    "Gallery/8.png",
    "Gallery/9.png",
    "Gallery/10.png",
    "Gallery/11.png",
    "Gallery/12.png",
    "Gallery/13.png",
    "Gallery/14.png",
    "Gallery/15.png",
    "Gallery/16.png",
    "Gallery/17.png",
    "Gallery/18.png",
    "Gallery/19.png",
    "Gallery/20.png",
    "Gallery/21.png",
    "Gallery/22.png",
    "Gallery/23.png",
    "Gallery/24.png",
    "Gallery/25.png",
    "Gallery/26.png",
    "Gallery/27.png",
    "Gallery/28.png",
    "Gallery/29.png",
    "Gallery/30.png",
    "Gallery/31.png",
    "Gallery/32.png",
    "Gallery/33.png",
    "Gallery/34.png",
    "Gallery/35.png",
    "Gallery/36.png",
    // "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=500&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=500&auto=format&fit=crop",
  ];
  /* 
     Use exact number of photos available (No repetition) 
  */
  const photoCount = images.length;

  if (!collageSection) return;

  // Shuffle the images array for random order
  images.sort(() => Math.random() - 0.5);

  for (let i = 0; i < photoCount; i++) {
    const photo = document.createElement("div");
    photo.className = "collage-photo";

    // Random styling for size variation (approx 20% chance for each special size)
    const randomSize = Math.random();
    if (randomSize > 0.85) {
      photo.classList.add("big"); // 2x2
    } else if (randomSize > 0.65) {
      // Removed "wide" (2x1) as it shorts portrait photos
      photo.classList.add("tall"); // 1x2 checks
    }
    // Else stays 1x1 (Standard Portrait)

    // Image source
    const img = document.createElement("img");
    img.src = images[i]; // No modulo needed, one per item
    photo.appendChild(img);

    // Staggered animation delay for "wave" effect
    const delay = (i % 10) * 0.05;
    photo.style.animationDelay = delay + "s";

    collageSection.appendChild(photo);
  }
}

generateCollage();


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
