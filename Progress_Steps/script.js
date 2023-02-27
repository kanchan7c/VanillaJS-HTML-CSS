const progessBar = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActiveCircle = 1;

// Next button functionality

nextBtn.addEventListener('click', () => {
  currentActiveCircle++;

  if (currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }
  // if (currentActiveCircle > circles.length - 1) {
  //   nextBtn.setAttribute('disabled', '');
  // }

  // if (currentActiveCircle > 1) {
  //   prevBtn.removeAttribute('disabled');
  // }
  // console.log(currentActiveCircle);
  update();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
  if (currentActiveCircle > 1) {
    currentActiveCircle--;
  }
  // console.log(currentActiveCircle);

  // if (currentActiveCircle <= 1) {
  //   prevBtn.setAttribute('disabled', '');
  //   nextBtn.removeAttribute('disabled');
  // }
  update();
});

// update the progress when button is clicked
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActiveCircle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const activeCircles = document.querySelectorAll('.active');

  // updating the length of progress bar
  progessBar.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

  // Disabling and enabling buttons based on the progress bar
  if (currentActiveCircle === 1) {
    nextBtn.disabled = false;
    prevBtn.disabled = true;
  }

  if (currentActiveCircle === 4) {
    nextBtn.disabled = true;
    prevBtn.disabled = false;
  }
}
