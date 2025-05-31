const roles = ["Developer", "Programmer", "Aspiring Data Engineering"];
let currentRole = 0;
let charIndex = 0;
let typing = true;

const typedText = document.querySelector(".typed-text");

function typeEffect() {
  if (typing) {
    if (charIndex < roles[currentRole].length) {
      typedText.textContent += roles[currentRole].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 2000);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = roles[currentRole].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
}
typeEffect();

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
