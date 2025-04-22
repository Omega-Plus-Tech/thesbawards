(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);



// Select all nav links
const navLinks = document.querySelectorAll(' .nav-item .dropdown-item');

// Select the navbar collapse element
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Close the navbar when a link is clicked
    const isExpanded = navbarCollapse.classList.contains('show');
    if (isExpanded) {
      const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
    }
  });
});




const gallery = document.querySelector('.gallery');
const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');
const zoomOverlay = document.querySelector('.zoom-overlay');
const zoomedImage = document.querySelector('.zoomed-image');
const closeButton = document.querySelector('.close-button');

// Navigation logic
let currentScroll = 0;
const scrollAmount = gallery.clientWidth;

prevButton.addEventListener('click', () => {
  currentScroll -= scrollAmount;
  if (currentScroll < 0) currentScroll = 0;
  gallery.scrollTo({ left: currentScroll, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  currentScroll += scrollAmount;
  if (currentScroll > gallery.scrollWidth - gallery.clientWidth) {
    currentScroll = gallery.scrollWidth - gallery.clientWidth;
  }
  gallery.scrollTo({ left: currentScroll, behavior: 'smooth' });
});

// Zoom logic
document.querySelectorAll('.gallery img').forEach((img) => {
  img.addEventListener('click', () => {
    zoomedImage.src = img.src;
    zoomOverlay.classList.add('visible');
  });
});

// Close zoom
closeButton.addEventListener('click', () => {
  zoomOverlay.classList.remove('visible');
  zoomedImage.src = '';
});


  // JavaScript to toggle hidden content of about
  document.getElementById('readMoreBtnAbout').addEventListener('click', function () {
    const hiddenContent = document.getElementById('hiddenContentAbout');
    const button = this;

    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        button.textContent = 'Read Less'; // Change button text
    } else {
        hiddenContent.style.display = 'none';
        button.textContent = 'Read More'; // Reset button text
    }
});

// JavaScript to toggle hidden content of Concept
document.getElementById('readMoreBtnConcept').addEventListener('click', function () {
    const hiddenContent = document.getElementById('hiddenContentConcept');
    const button = this;

    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        button.textContent = 'Read Less'; // Change button text
    } else {
        hiddenContent.style.display = 'none';
        button.textContent = 'Read More'; // Reset button text
    }
});

 // Adjust scroll position to account for fixed navbar
 document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = document.querySelector('.navbar').offsetHeight; // Get the navbar height
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            // Scroll to the adjusted position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    });
});

