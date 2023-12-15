// Navbar  Fixed
// window.addEventListener('scroll', ()=>{
//     const header = document.querySelector("header");
//     const fixedNav = header.offsetTop;

//     if(window.scrollY > fixedNav) {
//         header.classList.add('navbar-fixed')
//     } else {
//         header.classList.remove ('navbar-fixed')
//     }

// })

window.onscroll = function () {
  const toTop = document.querySelector("#to-top");
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");

// hamburger.addEventListener("click", () => {
// 	hamburger.classList.toggle("hamburger-active");
// });
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

const hoverSaya = document.getElementById('saya')

hoverSaya.addEventListener('mouseover', () => {
  hoverSaya.innerHTML = "Web Developer"
}, false)
hoverSaya.addEventListener('mouseout', () => {
  hoverSaya.innerHTML = "Student at Universitas Muhammadiyah Bengkulu"
}, false)
