var slider = document.querySelector(".slider");
var intervalId;

function startSlider() {
  intervalId = setInterval(function() {
    slider.style.transform = "translateX(-100%)";
    setTimeout(function() {
      slider.appendChild(slider.firstElementChild);
      slider.style.transform = "translateX(0)";
    }, 500);
  }, 3000);
}

function pauseSlider() {
  clearInterval(intervalId);
}

slider.addEventListener("mouseenter", pauseSlider);
slider.addEventListener("mouseleave", startSlider);

startSlider();
