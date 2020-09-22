window.addEventListener("DOMContentLoaded", (e) => {
  scrollToElement();
  findClick();
  mobilMenu();
  scrollAnimate();

});

window.addEventListener("scroll", (e) => {
  scrollAnimate();
});

const scrollToElement = () => {
  let element = document.querySelector(`.WeInPress`);
  let menuEl = document.querySelectorAll(`.toNews`);
  let pageUrl = window.location.href;
  menuEl.forEach(function (item) {
    item.addEventListener("click", function () {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });
  if(pageUrl.includes("page=basinda-biz")){
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const scrollAnimate = () => {
  let menuEl = document.querySelectorAll(`.animate__animated`);
  menuEl.forEach(function (item) {
    let topPositionItem = item.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (
      topPositionItem < windowHeight &&
      !item.classList.contains("animate__fadeInUp")
    ) {
      item.classList.add("animate__fadeInUp");
    }
  });
};

const findClick = () => {
  let findEl = document.querySelectorAll(`.find-ico`);
  let findAreaEl = document.querySelector(`.find-area .sub-menu`);
  let closeBtn = document.querySelector(".find-close");
  let classes = findAreaEl ? findAreaEl.classList : "";
  if (findEl) {
    findEl.forEach(function (item) {
      item.addEventListener("click", function () {
        classes.toggle("open");
        classes.toggle("animate__slideInLeft");
      });
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      classes.toggle("open");
      classes.toggle("animate__slideInLeft");
    });
  }
};


const mobilMenu = () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuEl = document.querySelector(".main-menu-box");
  if(hamburgerMenu){
    hamburgerMenu.addEventListener("click",function(){
      menuEl.classList.toggle("open");
      document.getElementsByTagName("BODY")[0].classList.toggle("no-scroll")
    })
  }
}

