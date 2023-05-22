const slider = document.querySelector('.slider');
const container = slider.querySelector('.slider-container');
const slides = container.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const slideWidth = slides[0].offsetWidth;
const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
const totalSlidesWidth = (slideWidth + slideMarginRight) * slides.length - slideMarginRight;
let currentPosition = 0;
let isHovered = false;
let autoScrollInterval;

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

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (!isHovered) {
      moveToNextSlide();
    }
  }, 10000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

function openServiceInfo(service) {
  // Виконайте потрібні дії для відображення інформації про послугу
  console.log(`Відкрито вікно з інформацією про послугу: ${service}`);
}

nextBtn.addEventListener('click', () => {
  stopAutoScroll();
  moveToNextSlide();
  startAutoScroll();
});

prevBtn.addEventListener('click', () => {
  stopAutoScroll();
  moveToPrevSlide();
  startAutoScroll();
});

slides.forEach((slide) => {
  slide.addEventListener('mouseenter', () => {
    isHovered = true;
    stopAutoScroll();
  });

  slide.addEventListener('mouseleave', () => {
    isHovered = false;
    startAutoScroll();
  });

  const link = slide.querySelector('.content a');
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const serviceName = link.innerText;
    openServiceInfo(serviceName);
  });
});

startAutoScroll();

