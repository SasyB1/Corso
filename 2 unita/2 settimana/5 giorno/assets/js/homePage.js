const imgCar = document.querySelectorAll("img");

imgCar.forEach((img) => {
  img.addEventListener("mouseover", () => {
    const carouselInner = img.closest(".carousel-inner");
    if (carouselInner) {
      carouselInner.classList.add("carusielVisible");
    }
  });
});

imgCar.forEach((img) => {
  img.addEventListener("mouseout", () => {
    const carouselInner = img.closest(".carousel-inner");
    if (carouselInner) {
      carouselInner.classList.remove("carusielVisible");
    }
  });
});
