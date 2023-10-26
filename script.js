var swiper = new Swiper(".swiper-container", {
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
  var textSlides = document.querySelectorAll(".text-slide");
  var textSlides2 = document.querySelectorAll(".text-slide2");
  textSlides.forEach(function (textSlide) {
    var newElement = textSlide.cloneNode(true);
    textSlide.parentNode.replaceChild(newElement, textSlide);
  });
  textSlides2.forEach(function (textSlide2) {
    var newElement = textSlide2.cloneNode(true);
    textSlide2.parentNode.replaceChild(newElement, textSlide2);
  });
}
