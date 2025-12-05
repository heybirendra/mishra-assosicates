// ===================================
// LEGAL ADVOCATE WEBSITE - JAVASCRIPT
// Interactive Functionality
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 968) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    });

    // ===================================
    // HEADER SCROLL EFFECT
    // ===================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when scrolling down
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default for same-page anchors
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const target = document.querySelector(href);
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // ACTIVE NAV LINK ON SCROLL
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // ===================================
    // SCROLL REVEAL ANIMATION
    // ===================================
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // ===================================
    // CONTACT FORM HANDLING
    // ===================================
    // Note: Form handling is now managed by contact-validation.js
    // using EmailJS for direct email sending.

    // ===================================
    // COUNTER ANIMATION FOR STATS
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;

        const statsSection = document.getElementById('about');
        if (!statsSection) return;

        const statsSectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (statsSectionTop < windowHeight - 100) {
            hasAnimated = true;

            statNumbers.forEach(stat => {
                const target = stat.textContent;
                const isPercentage = target.includes('%');
                const isPlus = target.includes('+');
                const number = parseInt(target.replace(/\D/g, ''));

                let current = 0;
                const increment = number / 50;
                const duration = 1500;
                const stepTime = duration / 50;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(counter);
                    }

                    let displayValue = Math.floor(current);
                    if (isPercentage) displayValue += '%';
                    if (isPlus) displayValue += '+';

                    stat.textContent = displayValue;
                }, stepTime);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Check on load

    // ===================================
    // LAZY LOADING FOR IMAGES
    // ===================================
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in-up');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ===================================
    // PREVENT FORM RESUBMISSION
    // ===================================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
