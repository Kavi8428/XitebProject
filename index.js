// index.js
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Pagination
    const paginationDots = document.querySelectorAll('.pagination span');
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            paginationDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            console.log(`Switch to slide ${index + 1}`);
        });
    });

    // Services Carousel
    const carouselSlides = document.querySelector('.carousel-slides');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;

    const updateCarousel = () => {
        carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
        carouselDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Testimonial Carousel
    const testimonialSlides = document.querySelector('.testimonial-slides');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonialSlide = 0;

    const updateTestimonialCarousel = () => {
        testimonialSlides.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
        testimonialDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonialSlide);
        });
    };

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonialSlide = index;
            updateTestimonialCarousel();
        });
    });

    // Why Choose Us Toggle Functionality
    const whyChooseUsItems = document.querySelectorAll('.why-choose-us-item');
    whyChooseUsItems.forEach(item => {
        const header = item.querySelector('.why-choose-us-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all other items
            whyChooseUsItems.forEach(i => i.classList.remove('active'));
            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Add this to your index.js
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('.stat-number').forEach(stat => {
    let target = parseInt(stat.textContent);
    let count = 0;
    let increment = target / 100; // Adjust speed
    let interval = setInterval(() => {
        count += increment;
        stat.textContent = Math.round(count);
        if (count >= target) {
            stat.textContent = target;
            clearInterval(interval);
        }
    }, 20);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animation]');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.getAttribute('data-animation');
                    entry.target.style.animation = `${animation} 1s ease-in-out forwards`;
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        {
            threshold: 0.1 // Trigger when 10% of the element is visible
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});