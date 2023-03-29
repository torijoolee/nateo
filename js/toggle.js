(() => {
  const toggleElem = document.querySelector(".toggle");
  const menuOpen = document.querySelector(".menu-open");
  toggleElem.addEventListener("click", function () {
    menuOpen.classList.toggle("active");
  });

  // toggle pc
  const togglePc = document.querySelector(".toggle-pc");
  const dark = document.querySelector(".dark");
  const menuList = document.querySelector(".pc-menu-list");
  const toggleClose = document.querySelector(".pc-menu-list button");
  let status = false;

  toggleClose.addEventListener("click", function () {
    status = false;
    if (status == false) {
      menuList.classList.remove("active");
      dark.classList.remove("darkbg");
      document.body.style.overflow = "visible";
      toggleClose.style.opacity = 0;
      toggleClose.style.right = "0px";
      toggleClose.style.width = "0px";
      toggleClose.style.transform = rotate("0deg");
      toggleClose.style.transition = "0.5s";
    }
  });

  togglePc.addEventListener("click", function () {
    status = true;
    if (status == true) {
      menuList.classList.add("active");
      document.body.style.overflow = "hidden";
      dark.classList.add("darkbg");
      toggleClose.style.opacity = 1;
      toggleClose.style.right = "475px";
      toggleClose.style.width = "50px";
      toggleClose.style.transform = rotate("180deg");
      toggleClose.style.transition = "0.5s";
    }
  });
})();
