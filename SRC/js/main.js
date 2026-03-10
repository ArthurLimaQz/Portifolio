const roles = [
  "Full Stack Developer",
  "Python Developer",
  "Back-end Developer",
  "Front-end Developer"
];

const roleElement = document.getElementById("role");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();