
const comicSeries = [
  "Batman (DC)",
  "Spawn (Image)",
  "Superman (DC)",
  "Absolute Wonder Woman (DC)",
  "Green Lantern (DC)",
  "Moon Knight (Marvel)"
];
const list = document.querySelector("#list");
const count = document.getElementById("count");

if (list && count) {
  comicSeries.forEach(function (series) {
    const li = document.createElement("li");
    li.textContent = series;
    list.appendChild(li);
  });
  count.textContent = `I have ${comicSeries.length} favorite comic series listed.`;
}

const quotes = [
  "So long as life remains, there is always hope... and so long as there is hope, there can be victory! - Wonder Woman ",
  "With great power comes great responsibility. - Spider-Man",
  "I am vengeance. I am the night. - Batman",
  "I believe in Truth and Justice and a better tomorrow. - Superman",
  "In brightest day, in blackest night, no evil shall escape my sight. - Green Lantern",
  "Compromise where you can. Where you can't, don't. - Captain America",
  "I have lived a lot of lives, and I have learned that the only way to truly live is to embrace the darkness within. - Moon Knight",

];
const quoteBox = document.getElementById("quote-box");
const quoteBtn = document.getElementById("quote-btn");
if (quoteBtn) {
  quoteBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
  });
}

const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("message");
const messageFeedback = document.getElementById("message-feedback");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const messageText = messageInput.value.trim();

    if (messageText.length < 20) {
      messageFeedback.textContent = "Please write at least 20 characters in your message.";
      formStatus.textContent = "";
      return;
    }

    messageFeedback.textContent = "";
    formStatus.textContent = "Thank you for your message! I will get back to you soon.";
    contactForm.reset();
  });
}