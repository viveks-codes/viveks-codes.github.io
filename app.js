const checkbox = document.querySelector(".checkbox");
const navbar = document.querySelector(".navbar");
const sideNav = document.querySelector(".sidenav");
const overlay = document.querySelector(".overlay");
const sidelinks = document.querySelectorAll(".closeSideNav");
const data = document.querySelectorAll(".down");
const dataSide = document.querySelectorAll(".data-side");
const info = document.querySelectorAll(".info");
const infoBtn = document.querySelector(".info-btn");
const loaderholder = document.querySelector(".loaderholder");

window.addEventListener("load", function () {
  setTimeout(function () {
    loaderholder.style.opacity = "0";

    setTimeout(function () {
      loaderholder.style.display = "none";
    }, 1000);
  }, 0);
});

window.addEventListener("DOMContentLoaded", function () {
  const width = window.innerWidth;
  if (width < 850) {
    dataSide.forEach(function (tag) {
      tag.removeAttribute("data-aos");
      tag.removeAttribute("data-aos-delay");
    });
    info.forEach(function (tag) {
      tag.setAttribute("data-aos-delay", 1300);
    });
    infoBtn.setAttribute("data-aos-delay", "2300");
  }
  if (width < 768) {
    data.forEach(function (tag) {
      tag.removeAttribute("data-aos");
      tag.removeAttribute("data-aos-delay");
    });

    info.forEach(function (tag) {
      tag.setAttribute("data-aos-delay", 1000);
    });
    infoBtn.setAttribute("data-aos-delay", "1700");
  }
});

function hideSidenav() {
  sideNav.style.width = "0px";
  document.body.classList.remove("block");
  document.body.classList.remove("scroll-stop");
  overlay.classList.remove("afterOverlay");
}
function showNavbar() {
  navbar.style.top = "0px";
  navbar.style.opacity = "1";
}

function hideNavBar() {
  navbar.style.top = "-80px";
  navbar.style.opacity = "0";
}

let currentPosition = 0;
window.addEventListener("scroll", function () {
  let position = window.pageYOffset;
  if (position > currentPosition) {
    hideNavBar();
  } else {
    showNavbar();
  }
  currentPosition = position;
});
checkbox.addEventListener("change", function () {
  if (this.checked) {
    sideNav.style.width = "250px";
    document.body.classList.add("block");
    document.body.classList.add("scroll-stop");
    overlay.classList.add("afterOverlay");
  } else {
    hideSidenav();
  }
});

overlay.addEventListener("click", function () {
  checkbox.checked = false;
  hideSidenav();
});

sidelinks.forEach(function (link) {
  link.addEventListener("click", function () {
    checkbox.checked = false;
    hideSidenav();
  });
});

window.addEventListener("resize", function () {
  const width = window.innerWidth;
  if (width > 768) {
    checkbox.checked = false;
    hideSidenav();
  }
});
