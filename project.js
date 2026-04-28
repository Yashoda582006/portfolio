
/* 🌙 DARK MODE TOGGLE + SAVE */
function toggleDark() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("toggle-btn");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
}

/* 🔁 LOAD SAVED THEME */
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("toggle-btn").innerText = "☀️";
  }
};


/* 🎯 SMOOTH SCROLL */
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* ✨ SCROLL ANIMATION (Fade-in) */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  observer.observe(section);
});


/* 🔥 TYPING EFFECT (Hero Title) */
const text = "Web Developer | I build clean & creative websites";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".hero p:last-of-type").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

window.addEventListener("load", () => {
  document.querySelector(".hero p:last-of-type").innerHTML = "";
  typeEffect();
});


/* 🎮 CARD CLICK EFFECT */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 150);
  });
});
