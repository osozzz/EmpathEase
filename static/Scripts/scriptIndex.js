document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('myHeader');
	var page = document.getElementById('page');
  var openMenuButton = document.getElementById('openmenu');

	window.addEventListener('scroll', function() {
		page.classList.remove('menuopen');
			if (window.scrollY >= 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
  });

  // Event listener to remove the sticky class when the button is clicked
  openMenuButton.addEventListener('click', function() {
    header.classList.remove('sticky');
		page.classList.add('menuopen');
  });
	
	var links = document.querySelectorAll('a[href^="#"]');

	links.forEach(function(link) {
		link.addEventListener('click', function(event) {
			// Prevent the default action
			event.preventDefault();

			// Get the target element
			var targetId = this.getAttribute('href');
			var targetElement = document.querySelector(targetId);

			// Smooth scroll to target
			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});
});

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});