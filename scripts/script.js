"use strict";
// --------------- LEAFLET MAP-----------------------------
const myCoords = [38.0928085, 20.6884188];
const map = L.map("map").setView([...myCoords], 6.5);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(map);

L.marker([...myCoords])
  .addTo(map)
  .openPopup();

// --------------- COPYRIGHT YEAR-----------------------------
const currYear = new Date().getFullYear();
const footerYear = document.querySelector(".footer-year");
footerYear.textContent = currYear;

// --------------- STICKY HEADER-----------------------------
const hero = document.querySelector(".hero-section");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const logo = document.querySelector(".nnn1");
const headerHeigh = header.getBoundingClientRect();
document.documentElement.style.setProperty("--height", `${headerHeight}px`);
window.addEventListener("scroll", function (e) {});
const obs = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      header.classList.remove("sticky");
    }
    if (!entry.isIntersecting) {
      header.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0.2,
    // rootMargin: `-${headerHeight}px`,
  }
);
obs.observe(hero);

// --------------- HEADER HMOUSEOVER/OPACITY/COLOR-----------------------------
const headerTag = document.querySelector(".header_tag");
const navLink = document.querySelectorAll(".nav-link");
headerTag.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    navLink.forEach((link) => {
      link.style.opacity = "45%";
      link.style.color = "var(--gray)";
    });
    logo.style.opacity = "45%";
    const link = e.target.id;
    document.querySelector(`#${link}`).style.opacity = "100%";
    document.querySelector(`#${link}`).style.color = "var(--light)";
  }
});
headerTag.addEventListener("mouseout", function (e) {
  navLink.forEach((link) => {
    link.style.color = "var(--light)";
    link.style.opacity = "100%";
  });
  logo.style.opacity = "100%";
});

// --------------- SOCIAL MOUSEOVER/OPACITY-----------------------------
const social = document.querySelector(".social");
const socialIcon = document.querySelectorAll(".social-icon");

social.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("social-icon")) {
    socialIcon.forEach((link) => (link.style.opacity = "40%"));
    const linke = e.target.id;
    document.querySelector(`#${linke}`).style.opacity = "100%";
  }
});

social.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("social-icon")) {
    socialIcon.forEach((link) => {
      link.style.opacity = "100%";
    });
  }
});

// --------------- HOME/HERO SCROLL-DOWN-----------------------------
const heroScroll = document.querySelector(".hero-scroll");
const logoHeader = document.querySelector(".header-logo");

heroScroll.addEventListener("click", (e) => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

logoHeader.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.parentElement.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// document.querySelector(".home").addEventListener("click", (e) => {
//   e.preventDefault();
//   const id = e.target.parentElement.getAttribute("href");
//   document.querySelector(id).scrollIntoView({ behavior: "smooth" });
// });

// --------------- NAV SMOOTH SCROLLING-----------------------------
headerTag.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("nav-link")) return;
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
// ---------------PROJECT SLIDE -----------------------------
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const slides = document.querySelectorAll(".project-slide-box");

let curr = 0;

rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (curr < 2) {
    curr++;
  } else if (curr === 2) {
    curr = 0;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translate(${100 * (i - curr)}%)`;
  });
});

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (curr === 0) {
    curr = 2;
  } else if (curr > 0) {
    curr--;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translate(${100 * (i - curr)}%)`;
  });
});

// ---------------slide/list on procjests -----------------------------
// active-project
const projectsBtn = document.querySelector(".project-btns");
const projectBtn = document.querySelectorAll(".project-btn");

const displayProj = document.querySelectorAll(".project-display-box");

projectsBtn.addEventListener("click", (e) => {
  if (!e.target.classList.contains("project-btn")) return;

  projectBtn.forEach((btn) => {
    btn.classList.remove("active-project-btn");
  });
  const clicked = e.target.dataset.btn;

  document
    .querySelector(`.project-btn${clicked}`)
    .classList.add("active-project-btn");

  displayProj.forEach((btn) => {
    btn.classList.remove("active-project");
  });

  const id = e.target.id;

  document.querySelector(`.view-${id}`).classList.add("active-project");
});

// ---------------slide/list on procjests -----------------------------
