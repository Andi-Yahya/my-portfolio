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

// Mail
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
          ", " + "Pesan anda telah dikirim, "+
          " Terima Kasih telah menghubungi saya" +
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

const scrolledWindow = () => {
  if (window.scrollY > 500) {
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
