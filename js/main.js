// LENSTORIES Website JavaScript - Enhanced Animations
// Inspired by minimalist editorial design with rich motion

document.addEventListener('DOMContentLoaded', function() {
    // ==========================================
    // Page Loader
    // ==========================================
    const pageLoader = document.getElementById('pageLoader');
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.classList.add('loaded');
        }, 800);
    });

    // ==========================================
    // Navigation scroll effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // Mobile menu toggle
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================
    // Scroll reveal animation
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // Philosophy section special animation
    // ==========================================
    const philosophy = document.querySelector('.philosophy');
    const philosophyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    if (philosophy) {
        philosophyObserver.observe(philosophy);
    }

    // ==========================================
    // Smooth scroll for anchor links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // Card hover parallax effect
    // ==========================================
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(0) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // ==========================================
    // Number counter animation for values
    // ==========================================
    const valueNumbers = document.querySelectorAll('.value-number');
    
    const animateValue = (element) => {
        const text = element.textContent;
        const num = parseInt(text);
        if (isNaN(num)) return;
        
        let current = 0;
        const increment = num / 30;
        const suffix = text.replace(num.toString(), '');
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                element.textContent = text;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 50);
    };

    // ==========================================
    // Parallax effect on scroll
    // ==========================================
    const hero = document.querySelector('.hero');
    const particles = document.querySelectorAll('.particle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero content
        if (hero && scrolled < window.innerHeight) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
            
            // Parallax for particles
            particles.forEach((particle, index) => {
                const speed = 0.1 + (index * 0.05);
                particle.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });

    // ==========================================
    // Cursor effects
    // ==========================================
    const interactiveElements = document.querySelectorAll('a, button, .card, .btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.cursor = 'pointer';
        });
    });

    // ==========================================
    // Intersection Observer for staggered animations
    // ==========================================
    const staggerContainers = document.querySelectorAll('.values-grid');
    
    staggerContainers.forEach(container => {
        const items = container.querySelectorAll('.value');
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 150);
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        staggerObserver.observe(container);
    });

    // ==========================================
    // Logo click effect
    // ==========================================
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // Button ripple effect
    // ==========================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                width: 100px;
                height: 100px;
                left: ${x - 50}px;
                top: ${y - 50}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // Lazy load images with fade-in
    // ==========================================
    const images = document.querySelectorAll('.card-image');
    images.forEach(img => {
        img.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)';
    });

    // ==========================================
    // Reduced motion support
    // ==========================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable heavy animations
        document.querySelectorAll('.particle').forEach(p => {
            p.style.display = 'none';
        });
        
        // Reset all animated properties
        document.querySelectorAll('[class*="reveal"]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
        });
    }
});