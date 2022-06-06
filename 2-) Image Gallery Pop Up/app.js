const fullImg = document.querySelector(".full-img");
// console.log(fullImg);

const smallImg = document.querySelectorAll(".gallery img");
// console.log(smallImg);

const modal = document.querySelector(".modal");
console.log(modal);

smallImg.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.classList.add("open");
    fullImg.classList.add("open");
    // Changing the images dynamically
    const originalQuality = img.getAttribute("alt");
    fullImg.src = `img/full/${originalQuality}.jpg`;
  });
});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
