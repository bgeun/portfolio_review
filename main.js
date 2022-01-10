"use strict";

// Make navbar transparent when it is on the top

// html에서 만든 id="navbar"를 가져옴.
const navbar = document.querySelector("#navbar");
// navbar의 높이를 가져옴
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤이 될 때마다 등록한 함수를 호출
// 아무런 인자를 받지 않고 원하는 블록을 실행
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
