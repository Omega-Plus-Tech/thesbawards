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



// Close the mobile menu after clicking a navigation item on either header shell.
const navLinks = document.querySelectorAll('.site-nav__link, .mobile-bottom-nav__item, .navbar-nav .dropdown-item');
const navbarCollapse = document.querySelector('#siteNav, #navbarCollapse');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (!navbarCollapse || typeof bootstrap === 'undefined' || !bootstrap.Collapse) {
            return;
        }

        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
        if (collapseInstance) {
            collapseInstance.hide();
        }
    });
});




const gallery = document.querySelector('.gallery');
const zoomOverlay = document.querySelector('.zoom-overlay');
// const zoomedImage = document.querySelector('.zoomed-image');
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
    const readMoreBtnAbout = document.getElementById('readMoreBtnAbout');
    if (readMoreBtnAbout) {
        readMoreBtnAbout.addEventListener('click', function () {
            const hiddenContent = document.getElementById('hiddenContentAbout');
            if (!hiddenContent) {
                return;
            }

            const shouldOpen = hiddenContent.style.display === 'none' || hiddenContent.style.display === '';
            hiddenContent.style.display = shouldOpen ? 'block' : 'none';
            this.textContent = shouldOpen ? 'Read Less' : 'Read More';
        });
    }

    // JavaScript to toggle hidden content of Concept
    const readMoreBtnConcept = document.getElementById('readMoreBtnConcept');
    if (readMoreBtnConcept) {
        readMoreBtnConcept.addEventListener('click', function () {
            const hiddenContent = document.getElementById('hiddenContentConcept');
            if (!hiddenContent) {
                return;
            }

            const shouldOpen = hiddenContent.style.display === 'none' || hiddenContent.style.display === '';
            hiddenContent.style.display = shouldOpen ? 'block' : 'none';
            this.textContent = shouldOpen ? 'Read Less' : 'Read More';
        });
    }

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
  ],
  "2025": [
    "img/gallery/2025/img1.webp",
    "img/gallery/2025/img2.webp",
    "img/gallery/2025/img3.webp",
    "img/gallery/2025/img4.webp",
    "img/gallery/2025/img5.webp",
    "img/gallery/2025/img6.webp",
    "img/gallery/2025/img7.webp",
    "img/gallery/2025/img8.webp",
    "img/gallery/2025/img9.webp",
    "img/gallery/2025/img10.webp",
    "img/gallery/2025/img11.webp",
    "img/gallery/2025/img12.webp",
    "img/gallery/2025/thumb1.webp",
    "img/gallery/2025/thumb2.webp",
    "img/gallery/2025/thumb3.webp",
    "img/gallery/2025/thumb4.webp",
  ],
};

document.querySelectorAll('.year-gallery-card').forEach(card => {
    card.addEventListener('click', function () {
        const year = this.getAttribute('data-year');
        const images = yearImages[year] || [];
        const galleryDiv = document.getElementById('yearGalleryImages');
        const modalHost = document.getElementById('yearGalleryModal');
        const modalLabel = document.getElementById('yearGalleryLabel');

        if (!galleryDiv || !modalHost || !modalLabel || typeof bootstrap === 'undefined' || !bootstrap.Modal) {
            return;
        }

        // Update gallery with Lightbox2-compatible markup
        galleryDiv.innerHTML = images.map(src => `
            <div class="col-md-3 col-6">
                <a href="${src}" data-lightbox="year-${year}">
                    <img src="${src}" class="img-fluid rounded mb-2" alt="">
                </a>
            </div>
        `).join('');

        modalLabel.textContent = `Gallery - ${year}`;
        const modal = new bootstrap.Modal(modalHost);
        modal.show();
    });
});


// Close navbar on nav-link or dropdown-item click, but NOT on dropdown-toggle
document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item').forEach(link => {
    link.addEventListener('click', function () {
        // If this is a dropdown-toggle, do nothing (let Bootstrap handle it)
        if (this.classList.contains('dropdown-toggle')) return;

        const legacyNavbarCollapse = document.getElementById('navbarCollapse');
        if (legacyNavbarCollapse && legacyNavbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(legacyNavbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});



// 1. Store bios in an object
const teamBios = {
    narendra: "Narendra Singh Lodhi belongs to a farmer family, he has done his graduation in agriculture from Brahmanand Mahavidyalaya Rath Hamirpur Uttar Pradesh and graduation in education from Dr. Harisingh Gour Vishwavidyalaya Sagar Madhya Pradesh.Currently working as a science teacher in Chitrakoot district UP.His special focus is to make arrangements for financial support for the educational needs of dedicated students struggling with financial problems by appealing to the society. He has also run successful missions for the treatment of dozens of poor helpless seriously ill people, which has saved the lives of many people.Narendra Singh is also known as a motivator among the youth and he also has a special contribution in enhancing the talents of the region.  He is very fond of reading books. He remains in touch with senior writers of Hindi literature. He writes articles to attract the youth towards books and also delivers books from his personal collection to the people. He even delivers books to their homes so that their interest in books increases and they have basic knowledge about various subjects and issues in society. At present, he is working to save the youth from false information being spread through social media.",
    mukesh: "Dr. Mukesh Kumar is a passionate forest ecologist with roots in an agrarian family. He earned his undergraduate degree from Banaras Hindu University, Varanasi, and completed his postgraduate studies and Ph.D. at Jawaharlal Nehru University, New Delhi. He is currently working as a postdoctoral fellow at the National Institute of Science Education and Research (NISER), Bhubaneswar, and Jawaharlal Nehru University.His research primarily focuses on the ecology of Himalayan pine and oak forest ecosystems. Over the course of his academic journey, Dr. Kumar has been awarded several prestigious international fellowships and travel grants, including those from the British Ecological Society, the International Biogeography Society, and the DST-SERB, allowing him to present his work in countries such as the UK, Spain, Estonia, and Indonesia.Beyond academia, Dr. Kumar maintains a strong interest in sustainable agriculture. He has developed an Integrated Farming Model tailored to the drought-prone Bundelkhand region, reflecting his commitment to bridging ecological research and grassroots farming practices.",
    indrapal: "Indra Pal Singh Rajput was born in a farmer family of Jarakhar, a small village in UP. Almost all the villagers of Jarakhar village participated enthusiastically in the freedom struggle. The highest number of freedom fighters in the district was also in Jarakhar, more than 60. In 1938, the Congress session was also held in Jarakhar. At that time Swami Brahmanand was the District President of Congress. Pandit Jawaharlal Nehru, Govind Ballabh Pant and hundreds of people participated in that session. The great freedom fighter from the village, Shri Shripat Sahay Rawat, who went to jail five times in the freedom struggle, was also an MLA twice.My primary education was completed in the village itself.I did my graduation from Brahmanand Mahavidyalaya Rath. After doing Bachelor of Education from DIET Charkhari, I am currently working as a teacher. And I am constantly giving momentum to the thoughts of Swami Brahmanand ji and also working to take my society towards education by removing superstition, hypocrisy and rituals prevalent in the society.",
    manoharsingh: "Manohar Singh belongs to a farmer family, resident of village Pawai, Tehsil Sarila district Hamirpur Uttar Pradesh. His current educational qualification is D-Pharma, M.B.A. As a profession he is a medicine trader.Working as a social worker since his student days, in his village he plays an important role in organizing, mass marriages of very low cost weddings through Siyamata Samajik Jankalyan Samiti 14 years,Present time Jila Lodhi samaj Kalyan Samiti Rath,Hamirpur U.P. since last 7 years.In Rath Hamirpur area he is working very actively for the last eight years for the promotion of educational and social thoughts of Swami Brahmanand ji through Lakshya Parivar Rath organization.He also works promptly from time to time for various educational events and for helping economically weak students.",

    devendra: "Devendra Mahan comes from an elite farmer family and social worker family of the region, he is a resident of village Sikrodha Tehsil Sarila District Hamirpur which is situated on the banks of Betwa river. Along with being highly educated and a businessman, he always plays a leading role in humanitarian works, he is also working relentlessly with the thought of spreading the teachings of Swami Brahmanand ji, India's first saint MP, freedom fighter, the sacrifice idol who brought about an education revolution in Bundelkhand, to the masses.",

    shriram: "Shriram Singh Lodh ---- You are currently working as Chief Ticket Inspector in North Central Railway. You were born in a poor but elite family in rural environment, whose grandfather was the Gram Pradhan of the third largest Gram Panchayat of Banda district at that time for three consecutive five years. He provided free medical treatment to patients of his own village as well as other regional villages throughout his life. During his tenure as Gram Pradhan, he set an unparalleled example of social service by establishing a Junior High School by donating 14 bighas of land to the school. Following the values ​​given by the elders and their footsteps, after primary education in the village, even in the condition of economic poverty, you studied from class IX to graduation from 1983 to 1988 with the money earned by working as a labourer and teaching tuitions in Banda.  Thereafter, he fulfilled his family responsibilities while teaching in a private school in a very backward area of ​​Madhya Pradesh at a meager salary of Rs. 100 per month. In the midst of meager resources and lack of competitive study material, he got his current government job from Railway Recruitment Board, Mumbai, in 1997 through text books and radio news. He believes that \"a life of struggle is the real life\" and making this come true, even while being in government service, he stayed away from a life of luxury, did not limit himself to his own people, went from village to village and showed the path to a respectable life to the neglected people of the society by opening free coaching and libraries through Lakshya Organisation.  So far, by visiting hundreds of backward villages and organizing meetings among the villagers, you have spread awareness about education. Along with this, you have tried your best to free the society from vices, hypocrisy, superstitions and evil practices, which have yielded pleasing results. Currently, under the banner of your own registered NGO \“Jeevan Sudha Foundation\”, you are continuously working on the world's most important issue \“Nature and Environment Conservation\”"
    // Add more as needed
};

// 2. Event listener for bio buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bio-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const member = this.getAttribute('data-member');
            const bio = teamBios[member] || "Bio not available.";
            const bioText = document.getElementById('bioText');
            const bioModalHost = document.getElementById('teamBioModal');

            if (!bioText || !bioModalHost || typeof bootstrap === 'undefined' || !bootstrap.Modal) {
                return;
            }
            // Set bio text in modal
            bioText.textContent = bio;
            // Optional: set the modal title if you have member names in the object too
            // document.getElementById('bioModalLabel').textContent = member.toUpperCase();

            // Show modal via Bootstrap JS API
            const bioModal = new bootstrap.Modal(bioModalHost);
            bioModal.show();
        });
    });
});


