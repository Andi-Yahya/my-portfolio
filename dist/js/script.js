const cta = document.getElementById("cta");
const listOfCta = [
  "Hello There",
  "Welcome!",
  "Thanks For Coming!",
  "Hire Me!!",
];
let i = 0;
const displayHello = () => {
  cta.innerHTML = listOfCta[i];
  if (i < listOfCta.length - 1) {
    i++;
  } else {
    i = 0;
  }
};
setInterval(displayHello, 2000);



// Hamburger

const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#nav-menu");

hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
};

// klik di luar hamburger
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  // darkToggle.checked ? html.classList.add("dark") : html.classList.remove('dark');
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    // html.classList.add('light')
  }
});

// pindahkan posisi toggle sesuai mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}



// check dark || light mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
