"use strict";

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".menu-btn").classList.toggle("active");
  document.querySelector(".nav-items").classList.toggle("open-menu");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu-btn").classList.remove("active");
    document.querySelector(".nav-items").classList.remove("open-menu");
  });
});

const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;
  if (name && email && phone && message) {
    alert("Thank you for your message!");
  }
});
