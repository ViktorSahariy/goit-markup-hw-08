// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');
// const slideWidths = slider.clientWidth / 258; // 4 зображення в одному слайді
// let currentSlide = 0;

// // переміщення слайдів вліво
// function slideLeft() {
//   if (currentSlide > 0) {
//     currentSlide--;
//     slides.style.transform = `translateX(-${slideWidths * currentSlide}px)`;
//   }
// }

// // переміщення слайдів вправо
// function slideRight() {
//   if (currentSlide < slides.children.length - 258) {
//     currentSlide++;
//     slides.style.transform = `translateX(-${slideWidths * currentSlide}px)`;
//   }
// }

// // додавання обробника подій для кнопок
// document.querySelector('.slider-button.left').addEventListener('click', slideLeft);
// document.querySelector('.slider-button.right').addEventListener('click', slideRight);

const slider = document.querySelector('.slider');
const container = slider.querySelector('.slider-container');
const slides = container.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const slideWidth = slides[0].offsetWidth;
const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
const totalSlidesWidth = (slideWidth + slideMarginRight) * slides.length - slideMarginRight;
let currentPosition = 0;

function goToSlide(position) {
  container.style.transform = `translateX(-${position}px)`;
}

function moveToNextSlide() {
  if (currentPosition === totalSlidesWidth - slideWidth) {
    currentPosition = 0;
  } else {
    currentPosition += slideWidth + slideMarginRight;
  }
  goToSlide(currentPosition);
}

function moveToPrevSlide() {
  if (currentPosition === 0) {
    currentPosition = totalSlidesWidth - slideWidth;
  } else {
    currentPosition -= slideWidth + slideMarginRight;
  }
  goToSlide(currentPosition);
}

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

setInterval(moveToNextSlide, 2000);
