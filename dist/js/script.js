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

const scrolledWindow = () => {
  if (window.scrollY >500) {
    console.log("Hello");
  }
};
window.addEventListener("scroll", scrolledWindow);

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

const hoverSaya = document.getElementById("saya");

hoverSaya.addEventListener(
  "mouseover",
  () => {
    hoverSaya.innerHTML = "Web Developer";
  },
  false,
);
hoverSaya.addEventListener(
  "mouseout",
  () => {
    hoverSaya.innerHTML = "Student at Universitas Muhammadiyah Bengkulu";
  },
  false,
);

const buttonSend = document.getElementById("buttonSend");
const SenderName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendMail() {
  let params = {
    from_name: SenderName.value,
    from_email: email.value,
    message: message.value,
  };
  emailjs.send("service_ua6mtkk", "template_p902f5j", params).then(
    function (response) {
      // alert("SUCCESS!", response.status, response.text);
      alert(
        "Status: " +
          response.status +
          ", " +
          response.text +
          ", " +
          " Terima Kasih telah menghubungi saya " +
          SenderName.value +
          ".",
      );
    },
    function (error) {
      alert(
        "FAILED..." +
          " something unexpected happened, your message couldn't be sent. Instead, please attempt to reach me through my social media. 🙏",
      );
    },
  );
}

buttonSend.addEventListener("click", (event) => {
  event.preventDefault();
  sendMail();
  SenderName.value = "";
  email.value = "";
  message.value = "";
});

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
