//slideshow
var slides = document.querySelectorAll('#slideshow .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
// for click
document.getElementById('check').addEventListener('change', function() {
    var nav = document.querySelector('.nav');
    if (this.checked) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });
  //menu javascript
  function filterMenu(category) {
    var menuItems = document.getElementsByClassName('menu-items')[0].getElementsByTagName('li');

    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].classList.contains(category)) {
        menuItems[i].style.display = 'block';
      } else {
        menuItems[i].style.display = 'none';
      }
    }

    var menuLinks = document.getElementsByClassName('menu')[0].getElementsByTagName('li');

    for (var j = 0; j < menuLinks.length; j++) {
      if (menuLinks[j].id === category) {
        menuLinks[j].classList.add('selected');
      } else {
        menuLinks[j].classList.remove('selected');
      }
    }
  }
