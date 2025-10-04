const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const text = form.message.value.trim();

  if (!name || !email.includes("@") || !text) {
    message.textContent = "Будь ласка, заповніть всі поля коректно.";
    message.style.color = "red";
  } else {
    message.textContent = "Дякуємо! Повідомлення надіслано.";
    message.style.color = "green";
    form.reset();
  }
});
const slides = document.querySelectorAll(".slide");
let current = 0;

document.getElementById("next").onclick = () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
};

document.getElementById("prev").onclick = () => {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
};
