let lang = document.querySelector(".lang");
let langf = document.querySelector(".langf");
let langShow = document.querySelector(".lang-show");
let topArrow = document.querySelector(".top-arrow");

lang.addEventListener("click", () => {
  langShow.classList.toggle("show-lang");
  topArrow.classList.toggle("top-arrow-rotate");
});

const gameSlider = new Swiper(".games", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  slidesShadow: true,
  slidesPerView: 1.47,
  spaceBetween: 15,
  centeredSlides: true,
  autoplay: {
    delay: 2800,
  },
});

const gameSlide = new Swiper(".game_slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

const rewiewSlide = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: ".button-next-rw",
    prevEl: ".button-prev-rw",
  },
});

const fvSlide = new Swiper(".fv-slider", {
  slidesPerView: 3,
  spaceBetween: 15,
  navigation: {
    nextEl: ".button-next-fv",
    prevEl: ".button-prev-fv",
  },
  autoplay: {
    delay: 1000,
  },
});

gsap.registerPlugin("ScrollTrigger");
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".top-prs .game-pr", {
    opacity: 0,
    stagger: 0.25,
    x: -200,
    scrollTrigger: {
      trigger: ".game-prs-pr",
      start: "top center",
    },
  });
});
let btnMinus = document.querySelectorAll(".dec");
let btnPlus = document.querySelectorAll(".inc");

btnMinus.forEach((btn) => {
  btn.addEventListener("click", () => {
    let prCount = btn.nextElementSibling;
    if (Number(prCount.innerText) > 0) {
      prCount.innerText = Number(prCount.innerText) - 1;
    }
  });
});
btnPlus.forEach((btn) => {
  btn.addEventListener("click", () => {
    let prCount = btn.previousElementSibling;
    prCount.innerText = Number(prCount.innerText) + 1;
  });
});

let spanShow = document.querySelectorAll(".span-show");

spanShow.forEach((span) => {
  span.addEventListener("click", () => {
    span.nextElementSibling.classList.toggle("account-type-div-hide");
  });
});

let filterBtn = document.querySelector(".filter-btn");
let filterBtnShow = document.querySelector(".filter-btn-show");
let toPArrow = document.querySelector(".topp-arrow");

filterBtn?.addEventListener("click", () => {
  filterBtnShow.classList.toggle("filter-btn-show-active");
  toPArrow.classList.toggle("bottom-arrow");
});

let prbuysText = document.querySelectorAll(".products-buys-text");

prbuysText.forEach((text) => {
  text.addEventListener("click", () => {
    text.nextElementSibling.classList.toggle("products-buys-show");
    text.parentElement.classList.toggle("products-buys-active");
    text.classList.toggle("products-buys-text-active");
  });
});

//  Free Timer
let dy = document.querySelector(".day-h1");
let hr = document.querySelector(".hour-h1");
let mn = document.querySelector(".min-h1");
let sc = document.querySelector(".sec-h1");

// function up(){
//   let tomorrov = new Date('March 29 2023 00:00:00').getTime();
//   let now = new Date().getTime();
//   let farq = tomorrov - now;
//   // Days
//   let days = Math.floor(farq / (1000 * 60 * 60 * 24));
//   // hours
//   let hours = Math.floor(farq / (1000 * 60 * 60) % 24);
//   //Minutes
//   let minutes = Math.floor(farq / (1000 * 60) % 60);
//   // Secundes
//   let secunds = Math.floor(farq / (1000)  % 60);
//   if(days < 10)
//   {
//       days = `0${days}`
//   }
//   if(hours < 10)
//   {
//       hours = `0${hours}`
//   }
//   if(minutes < 10)
//   {
//       minutes = `0${minutes}`
//   }
//   if(secunds < 10)
//   {
//       secunds = `0${secunds}`
//   }
//   dy?.innerText = days;
//   hr?.innerText = hours;
//   mn?.innerText = minutes;
//   sc?.innerText = secunds;
// }

// setInterval(up, 1000)
// up();

// Buy Modal
let modalHide = document.querySelector(".modal-hide");
let modalShow = document.querySelectorAll(".show-modal");
let bg = document.querySelector(".bg");

modalShow.forEach((a) => {
  a.addEventListener("click", () => {
    modalHide.classList.add("modal-hide-active");
    bg.classList.add("bg-active");
  });
});

bg?.addEventListener("click", () => {
  modalHide.classList.remove("modal-hide-active");
  bg.classList.remove("bg-active");
});

let tabLinks = document.querySelectorAll(".tab-link");
let tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("salom");
    let attr = e.getAttribute("data-link");
    let elle = e;
    tabContents.forEach((el) => {
      if (attr === el.getAttribute("id")) {
        el.classList.add("tab-show");
        elle.classList.add("tab-link-active");
      } else {
        el.classList.remove("tab-show");
        elle.classList.remove("tab-link-active");
      }
    });
  });
});

let accTop = document.querySelectorAll(".faq-accordion-top");

accTop.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("faq-accordion-bottom-active");
    el.classList.toggle("faq-accordion-top-active");
  });
});

let user = document.querySelector(".user");
let userModal = document.querySelector(".user-modal");
let userBg = document.querySelector(".user-bg");

user.addEventListener("click", () => {
  userModal.classList.toggle("user-modal-active");
  userBg.classList.add("user-bg-active");
});

userBg.addEventListener("click", () => {
  userModal.classList.remove("user-modal-active");
  userBg.classList.remove("user-bg-active");
});
