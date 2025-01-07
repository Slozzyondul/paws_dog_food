// main.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('Welcome to Paws Kenya!');

    // Dropdown navigation functionality
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            menu.classList.toggle('show');
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.parentElement.querySelector('h4').innerText;
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Sticky header functionality
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Scroll to section functionality
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Best sellers carousel functionality
    const carousel = document.querySelector('.best-sellers-carousel');
    if (carousel) {
        let scrollAmount = 0;
        const scrollStep = 300;
        const scrollInterval = setInterval(() => {
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollAmount += scrollStep;
                carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        }, 3000);
    }

    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for getting in touch! We will respond shortly.');
            contactForm.reset();
        });
    }
});
