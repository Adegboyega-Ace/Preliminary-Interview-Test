const images = document.querySelectorAll(".carousel-images img");
let currentIndex = 0;
let timer;

function showImage(index) {
  images.forEach((image) => {
    image.classList.remove("active");
  });

  images[index].classList.add("active");
  currentIndex = index;
}

function startTimer() {
  stopTimer();
  timer = setInterval(() => {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    showImage(newIndex);
  }, 5000); 
}

function stopTimer() {
  clearInterval(timer);
}

showImage(currentIndex);
startTimer();
