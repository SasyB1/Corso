const nextPageCarousel = document.querySelectorAll(
  ".carousel-control-next-icon"
);
const prevPageCarousel = document.querySelectorAll(
  ".carousel-control-prev-icon"
);

prevPageCarousel.forEach((prevButton) => {
  let timeoutId;
  prevButton.addEventListener("click", () => {
    const carousel = prevButton.closest(".carousel");
    const imgCarousel = carousel.querySelector(".custom-carousel");
    imgCarousel.classList.add("carusielloHidden");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      imgCarousel.classList.remove("carusielloHidden");
    }, 500);
  });
});

nextPageCarousel.forEach((nextButton) => {
  let timeoutId;
  nextButton.addEventListener("click", () => {
    const carousel = nextButton.closest(".carousel");
    const imgCarousel = carousel.querySelector(".custom-carousel");
    imgCarousel.classList.add("carusielloHidden");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      imgCarousel.classList.remove("carusielloHidden");
    }, 500);
  });
});
