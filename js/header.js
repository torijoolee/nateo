(() => {
  const images = document.querySelectorAll(".header .img");
  const imgWrapper = document.querySelector(".img-wrapper");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let current = 0;
  let totalPage = images.length;
  let topHeight = 0;

  console.log(images);
  function calculateTallestSlide() {
    for (let i = 0; i < totalPage; i++) {
      if (images[i].offsetHeight > topHeight)
        topHeight = images[i].offsetHeight;
    }
  }
  calculateTallestSlide();

  next.addEventListener("click", function () {
    console.log(current);
    if (current < totalPage - 1) {
      current++;
      imgWrapper.style.transform = `translateX(${
        -current * images[0].offsetWidth
      }px)`;
      imgWrapper.style.transition = "0.5s";
    } else {
      current = 0;
      imgWrapper.style.transform = `translateX(${current}px)`;
    }
  });
  prev.addEventListener("click", function () {
    console.log(current);
    if (current > 0) {
      current--;
      imgWrapper.style.transform = `translateX(${
        -current * images[0].offsetWidth
      }px)`;
      imgWrapper.style.transition = "0.5s";
    } else {
      current = totalPage;
      imgWrapper.style.transform = `translateX(${
        totalPage - 1 * -images[0].offsetWidth
      }px)`;
    }
  });
})();
