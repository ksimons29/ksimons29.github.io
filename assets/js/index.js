/**
 * Koos Simons Portfolio - Enhanced Interactions
 * Scroll-triggered animations and micro-interactions
 */

(function() {
  'use strict';

  // Dark mode detection
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScrolling();
    initHeaderParallax();
  });

  /**
   * Intersection Observer for scroll-triggered animations
   */
  function initScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optionally unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.layout, .intro-container, .list-container, .text-container');
    animatedElements.forEach(function(el) {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
  }

  /**
   * Smooth scrolling for anchor links
   */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Subtle parallax effect on header
   */
  function initHeaderParallax() {
    const header = document.getElementById('header');
    if (!header) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrolled = window.pageYOffset;
          const headerHeight = header.offsetHeight;

          // Only apply effect while header is visible
          if (scrolled < headerHeight) {
            const opacity = 1 - (scrolled / headerHeight) * 0.5;
            const translateY = scrolled * 0.3;

            const headerContainer = header.querySelector('.header-container');
            if (headerContainer) {
              headerContainer.style.opacity = opacity;
              headerContainer.style.transform = 'translateY(' + translateY + 'px)';
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    });
  }

})();
