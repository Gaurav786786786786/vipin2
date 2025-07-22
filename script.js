// script.js

// 🔘 Toggle navigation menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// 🔘 Close menu if user clicks outside
document.addEventListener("click", function (event) {
  const nav = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");

  if (
    !nav.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    nav.classList.remove("show");
  }
});

// 🌙 Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ⬆️ Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function changeLanguage(lang) {
  if (lang === "hi") {
    window.location.href = "index-hi.html";  // Hindi page
  } else if (lang === "en") {
    window.location.href = "index-en.html";  // English page
  } else {
    alert("Language not supported.");
  }
}
// lang-handler.js

(function () {
  const lang = localStorage.getItem("siteLanguage") || "en";

  // Automatic redirect if URL doesn't match selected language
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf("/") + 1);

  // Redirect only if it's a base page without language suffix
  if (!file.includes(`-${lang}`) && file.includes(".html")) {
    const redirectTo = file.replace(".html", `-${lang}.html`);
    window.location.href = redirectTo;
  }
})();

// Language-based navigation
function goToPage(page) {
  const lang = localStorage.getItem("siteLanguage") || "en";
  window.location.href = `${page}-${lang}.html`;
}