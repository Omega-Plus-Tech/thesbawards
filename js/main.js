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
const zoomOverlay = document.querySelector('.zoom-overlay');
const zoomedImage = document.querySelector('.zoomed-image');
const closeButton = document.querySelector('.close-button');

// // Zoom logic
// document.querySelectorAll('.gallery img').forEach((img) => {
//   img.addEventListener('click', () => {
//     zoomedImage.src = img.src;
//     zoomOverlay.classList.add('visible');
//   });
// });

// // Close zoom when clicking the close button
// closeButton.addEventListener('click', () => {
//   zoomOverlay.classList.remove('visible');
//   zoomedImage.src = '';
// });

// // Close zoom when clicking outside the image
// zoomOverlay.addEventListener('click', (e) => {
//   if (e.target === zoomOverlay) {
//     zoomOverlay.classList.remove('visible');
//     zoomedImage.src = '';
//   }
// });


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


// Dummy images for each year
const yearImages = {
  "2019": [
    "img/gallery/2019/img1.webp",
    "img/gallery/2019/img2.webp",
    "img/gallery/2019/img3.webp",
    "img/gallery/2019/img4.webp",
    "img/gallery/2019/img5.webp",
    "img/gallery/2019/img6.webp",
    "img/gallery/2019/img7.webp",
    "img/gallery/2019/img8.webp",
    "img/gallery/2019/img9.webp",
    "img/gallery/2019/thumb1.webp",
    "img/gallery/2019/thumb2.webp",
    "img/gallery/2019/thumb3.webp",
    "img/gallery/2019/thumb4.webp",
  ],
  "2020": [
    "img/gallery/2020/img1.webp",
    "img/gallery/2020/img2.webp",
    "img/gallery/2020/img3.webp",
    "img/gallery/2020/img4.webp",
    "img/gallery/2020/img5.webp",
    "img/gallery/2020/img6.webp",
    "img/gallery/2020/img7.webp",
    "img/gallery/2020/img8.webp",
    "img/gallery/2020/img9.webp",
    "img/gallery/2020/img10.webp",
    "img/gallery/2020/img11.webp",
    "img/gallery/2020/img12.webp",
    "img/gallery/2020/img13.webp",
    "img/gallery/2020/img14.webp",
    "img/gallery/2020/img15.webp",
    "img/gallery/2020/img16.webp",
    "img/gallery/2020/img17.webp",
    "img/gallery/2020/img18.webp",
    "img/gallery/2020/img19.webp",
    "img/gallery/2020/img20.webp",
    "img/gallery/2020/img21.webp",
    "img/gallery/2020/img22.webp",
    "img/gallery/2020/img23.webp",
    "img/gallery/2020/img24.webp",
    "img/gallery/2020/img25.webp",
    "img/gallery/2020/img26.webp",
    "img/gallery/2020/img27.webp",
    "img/gallery/2020/thumb1.webp",
    "img/gallery/2020/thumb2.webp",
    "img/gallery/2020/thumb3.webp",
    "img/gallery/2020/thumb4.webp",
  ],
  "2021": [
    "img/gallery/2021/img1.webp",
    "img/gallery/2021/img2.webp",
    "img/gallery/2021/img3.webp",
    "img/gallery/2021/img4.webp",
    "img/gallery/2021/img5.webp",
    "img/gallery/2021/img6.webp",
    "img/gallery/2021/img7.webp",
    "img/gallery/2021/img8.webp",
    "img/gallery/2021/img9.webp",
    "img/gallery/2021/img10.webp",
    "img/gallery/2021/img11.webp",
    "img/gallery/2021/img12.webp",
    "img/gallery/2021/img13.webp",
    "img/gallery/2021/img14.webp",
    "img/gallery/2021/img15.webp",
    "img/gallery/2021/img16.webp",
    "img/gallery/2021/img17.webp",
    "img/gallery/2021/img18.webp",
    "img/gallery/2021/img19.webp",
    "img/gallery/2021/img20.webp",
    "img/gallery/2021/img21.webp",
    "img/gallery/2021/img22.webp",
    "img/gallery/2021/img23.webp",
    "img/gallery/2021/img24.webp",
    "img/gallery/2021/img25.webp",
    "img/gallery/2021/img26.webp",
    "img/gallery/2021/img27.webp",
    "img/gallery/2021/img28.webp",
    "img/gallery/2021/img29.webp",
    "img/gallery/2021/img30.webp",
    "img/gallery/2021/img31.webp",
    "img/gallery/2021/img32.webp",
    "img/gallery/2021/img33.webp",
    "img/gallery/2021/thumb1.webp",
    "img/gallery/2021/thumb2.webp",
    "img/gallery/2021/thumb3.webp",
    "img/gallery/2021/thumb4.webp",
  ],
  "2022": [
    
    "img/gallery/2022/img1.webp",
    "img/gallery/2022/img2.webp",
    "img/gallery/2022/img3.webp",
    "img/gallery/2022/img4.webp",
    "img/gallery/2022/img5.webp",
    "img/gallery/2022/img6.webp",
    "img/gallery/2022/img7.webp",
    "img/gallery/2022/img8.webp",
    "img/gallery/2022/img9.webp",
    "img/gallery/2022/img10.webp",
    "img/gallery/2022/img11.webp",
    "img/gallery/2022/img12.webp",
    "img/gallery/2022/img13.webp",
    "img/gallery/2022/img14.webp",
    "img/gallery/2022/img15.webp",
    "img/gallery/2022/img16.webp",
    "img/gallery/2022/img17.webp",
    "img/gallery/2022/img18.webp",
    "img/gallery/2022/img19.webp",
    "img/gallery/2022/img20.webp",
    "img/gallery/2022/img21.webp",
    "img/gallery/2022/img22.webp",
    "img/gallery/2022/img23.webp",
    "img/gallery/2022/img24.webp",
    "img/gallery/2022/img25.webp",
    "img/gallery/2022/img26.webp",
    "img/gallery/2022/img27.webp",
    "img/gallery/2022/img28.webp",
    "img/gallery/2022/img29.webp",
    "img/gallery/2022/img30.webp",
    "img/gallery/2022/img31.webp",
    "img/gallery/2022/thumb1.webp",
    "img/gallery/2022/thumb2.webp",
    "img/gallery/2022/thumb3.webp",
    "img/gallery/2022/thumb4.webp",
  ],
  "2023": [
    
    "img/gallery/2023/img1.webp",
    "img/gallery/2023/img2.webp",
    "img/gallery/2023/img3.webp",
    "img/gallery/2023/img4.webp",
    "img/gallery/2023/img5.webp",
    "img/gallery/2023/img6.webp",
    "img/gallery/2023/img7.webp",
    "img/gallery/2023/img8.webp",
    "img/gallery/2023/img9.webp",
    "img/gallery/2023/img10.webp",
    "img/gallery/2023/img11.webp",
    "img/gallery/2023/img12.webp",
    "img/gallery/2023/img13.webp",
    "img/gallery/2023/img14.webp",
    "img/gallery/2023/img15.webp",
    "img/gallery/2023/img16.webp",
    "img/gallery/2023/img17.webp",
    "img/gallery/2023/img18.webp",
    "img/gallery/2023/img19.webp",
    "img/gallery/2023/img20.webp",
    "img/gallery/2023/img21.webp",
    "img/gallery/2023/img22.webp",
    "img/gallery/2023/img23.webp",
    "img/gallery/2023/img24.webp",
    "img/gallery/2023/img25.webp",
    "img/gallery/2023/img26.webp",
    "img/gallery/2023/img27.webp",
    "img/gallery/2023/img28.webp",
    "img/gallery/2023/img29.webp",
    "img/gallery/2023/img30.webp",
    "img/gallery/2023/img31.webp",
    "img/gallery/2023/img32.webp",
    "img/gallery/2023/img33.webp",
    "img/gallery/2023/img34.webp",
    "img/gallery/2023/img35.webp",
    "img/gallery/2023/img36.webp",
    "img/gallery/2023/img37.webp",
    "img/gallery/2023/img38.webp",
    "img/gallery/2023/img39.webp",
    "img/gallery/2023/thumb1.webp",
    "img/gallery/2023/thumb2.webp",
    "img/gallery/2023/thumb3.webp",
    "img/gallery/2023/thumb4.webp",
  ],
  "2024": [
    "img/gallery/2024/img1.webp",
    "img/gallery/2024/img2.webp",
    "img/gallery/2024/img3.webp",
    "img/gallery/2024/img4.webp",
    "img/gallery/2024/img5.webp",
    "img/gallery/2024/img6.webp",
    "img/gallery/2024/img7.webp",
    "img/gallery/2024/img8.webp",
    "img/gallery/2024/img9.webp",
    "img/gallery/2024/img10.webp",
    "img/gallery/2024/img11.webp",
    "img/gallery/2024/img12.webp",
    "img/gallery/2024/img13.webp",
    "img/gallery/2024/img14.webp",
    "img/gallery/2024/img15.webp",
    "img/gallery/2024/img16.webp",
    "img/gallery/2024/img17.webp",
    "img/gallery/2024/img18.webp",
    "img/gallery/2024/img19.webp",
    "img/gallery/2024/img20.webp",
    "img/gallery/2024/img21.webp",
    "img/gallery/2024/img22.webp",
    "img/gallery/2024/img23.webp",
    "img/gallery/2024/img24.webp",
    "img/gallery/2024/img25.webp",
    "img/gallery/2024/img26.webp",
    "img/gallery/2024/img27.webp",
    "img/gallery/2024/img28.webp",
    "img/gallery/2024/img29.webp",
    "img/gallery/2024/img30.webp",
    "img/gallery/2024/img31.webp",
    "img/gallery/2024/img32.webp",
    "img/gallery/2024/img33.webp",
    "img/gallery/2024/img34.webp",
    "img/gallery/2024/img35.webp",
    "img/gallery/2024/img36.webp",
    "img/gallery/2024/img37.webp",
    "img/gallery/2024/img38.webp",
    "img/gallery/2024/img39.webp",
    "img/gallery/2024/img40.webp",
    "img/gallery/2024/img41.webp",
    "img/gallery/2024/img42.webp",
    "img/gallery/2024/img43.webp",
    "img/gallery/2024/img44.webp",
    "img/gallery/2024/img45.webp",
    "img/gallery/2024/img46.webp",
    "img/gallery/2024/img47.webp",
    "img/gallery/2024/img48.webp",
    "img/gallery/2024/img49.webp",
    "img/gallery/2024/img50.webp",
    "img/gallery/2024/img51.webp",
    "img/gallery/2024/img52.webp",
    "img/gallery/2024/img53.webp",
    "img/gallery/2024/img54.webp",
    "img/gallery/2024/img55.webp",
    "img/gallery/2024/img56.webp",
    "img/gallery/2024/img57.webp",
    "img/gallery/2024/thumb1.webp",
    "img/gallery/2024/thumb2.webp",
    "img/gallery/2024/thumb3.webp",
    "img/gallery/2024/thumb4.webp",
  ]
};

document.querySelectorAll('.year-gallery-card').forEach(card => {
  card.addEventListener('click', function() {
    const year = this.getAttribute('data-year');
    const images = yearImages[year] || [];
    const galleryDiv = document.getElementById('yearGalleryImages');
    galleryDiv.innerHTML = images.map(src => `
      <div class="col-md-3 col-6">
        <img src="${src}" class="img-fluid rounded mb-2" alt="">
      </div>
    `).join('');
    document.getElementById('yearGalleryLabel').textContent = `Gallery - ${year}`;
    var modal = new bootstrap.Modal(document.getElementById('yearGalleryModal'));
    modal.show();
  });
});


// Close navbar dropdown on nav-link click (for mobile)
document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.getElementById('navbarCollapse');
        if (navbarCollapse.classList.contains('show')) {
            // Bootstrap 5 uses collapse('hide')
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});
