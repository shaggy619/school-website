let swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, // Change slides every 5 seconds
  },
  on: {
    slideChange: function () {
      resetTextAnimation();
    },
  },
});

function resetTextAnimation() {
  let textSlides = document.querySelectorAll(".text-slide");
  let textSlides2 = document.querySelectorAll(".text-slide2");
  textSlides.forEach(function (textSlide) {
    let newElement = textSlide.cloneNode(true);
    textSlide.parentNode.replaceChild(newElement, textSlide);
  });
  textSlides2.forEach(function (textSlide2) {
    let newElement = textSlide2.cloneNode(true);
    textSlide2.parentNode.replaceChild(newElement, textSlide2);
  });
}

const menuToggle = document.getElementById("mobile-menu");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});
