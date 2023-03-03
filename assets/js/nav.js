// Hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const hambMenu = document.querySelector(".hamb-menu ");

menuToggle.addEventListener("click", function () {
  hambMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target)) {
    hambMenu.classList.remove("active");
    inputFalse();
  }
});

const inputFalse = () => {
  const inputMenu = document.querySelector(".input-menu");
  inputMenu.checked = false;
};

// Back to top
window.onscroll = function () {
  const toTop = document.querySelector(".back-to-top");

  if (window.pageYOffset > 10) {
    toTop.style.visibility = "visible";
  } else {
    toTop.style.visibility = "hidden";
  }
};
