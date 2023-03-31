(() => {
  const images = document.querySelectorAll(".header .img");
  const imgWrapper = document.querySelector(".img-wrapper");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const barElems = document.querySelectorAll(".header-current span");
  let current = 0;
  let totalPage = images.length;
  let topHeight = 0;

  //화면 높이 맞추기
  function calculateTallestSlide() {
    for (let i = 0; i < totalPage; i++) {
      images[i].dataset.index = i;
      barElems[i].dataset.index = i;
      if (images[i].offsetHeight > topHeight)
        topHeight = images[i].offsetHeight;
    }
  }
  calculateTallestSlide();

  function prevHandle() {
    if (current > 0) {
      current--;
      imgWrapper.style.transform = `translateX(${
        -current * images[0].offsetWidth
      }px)`;
      imgWrapper.style.transition = "0.5s";
      barActive();
    } else {
      current = totalPage - 1;
      imgWrapper.style.transform = `translateX(${
        -current * images[0].offsetWidth
      }px)`;
      imgWrapper.style.transition = "0.5s";
      barActive();
    }
  }
  prev.addEventListener("click", prevHandle);
  next.addEventListener("click", nextHandle);

  function nextHandle() {
    if (current < totalPage - 1) {
      current++;
      imgWrapper.style.transform = `translateX(${
        -current * images[0].offsetWidth
      }px)`;
      imgWrapper.style.transition = "0.5s";
      console.log(current);
      barActive();
    } else {
      current = 0;
      imgWrapper.style.transform = `translateX(${
        -current * images[0].offsetWidth
      }px)`;
      imgWrapper.style.transition = "0.5s";
      console.log(current);
      barActive();
    }
  }

  //current와 같은 테이터 인덱스의 바 액티브
  function barActive() {
    barElems.forEach((bar) => {
      if (bar.dataset.index == current) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });
  }
})();
