(() => {
  const smallImgs = document.querySelectorAll(".img-wrapper .small");
  const imgWrapper = document.querySelector(".header .img-wrapper");
  let ImgWidth = smallImgs[0].offsetWidth;
  let current = 0;
  let totalPage = smallImgs.length;

  // for(let i = 0; i<totalPage; i++){
  //   smallImgs[i].dataset.index = i;
  //   current = smallImgs[i].dataset.index;
  // }
  function moving() {
    current++;
    imgWrapper.style.transform = `translateX(${current * ImgWidth}px)`;
  }

  setInterval(moving, 300);
})();
