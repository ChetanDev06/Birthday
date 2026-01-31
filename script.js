function scrollToStory() {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });
}

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
});

/* Typewriter effect */
const text =
  "You are my safe place, my happiness, and my favorite part of every day. Thank you for being you. I love you endlessly 💖";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 45);
  }
}

typeEffect();

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 20000);
}, 2500);
/* Photo click interaction */
const photoCards = document.querySelectorAll(".photo-card");
const photoContainer = document.querySelector(".photos");

photoCards.forEach(card => {
  const textBox = card.querySelector(".photo-text");
  const text = card.getAttribute("data-text");

  card.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    // Reset all
    photoCards.forEach(c => {
      c.classList.remove("active");
      c.querySelector(".photo-text").textContent = "";
    });
    photoContainer.classList.remove("dim");

    // Activate clicked one
    if (!isActive) {
      card.classList.add("active");
      textBox.textContent = text;
      photoContainer.classList.add("dim");
    }
  });
});
