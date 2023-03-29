(() => {
  const images = ["01.png", "02.png", "03.png", "04.png", "05.png"];
  const headerImg = document.querySelector(".header .img");
  let current = 0;
  headerImg.src = `nateolimg/${images[current]}`;
})();
