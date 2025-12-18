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
    initDraggableWidget();
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

  /**
   * Draggable LLYLI Widget
   * Users can drag the widget anywhere on screen
   * Position is saved to localStorage
   */
  function initDraggableWidget() {
    const widget = document.querySelector('.llyli-widget');
    if (!widget) return;

    let isDragging = false;
    let startX, startY, initialX, initialY;
    let hasMoved = false;

    // Load saved position from localStorage
    const savedPosition = localStorage.getItem('llyli-widget-position');
    if (savedPosition) {
      try {
        const pos = JSON.parse(savedPosition);
        widget.style.right = 'auto';
        widget.style.bottom = 'auto';
        widget.style.left = pos.x + 'px';
        widget.style.top = pos.y + 'px';
      } catch (e) {
        // Invalid saved position, use default
      }
    }

    // Mouse events
    widget.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    // Touch events
    widget.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', endDrag);

    function startDrag(e) {
      isDragging = true;
      hasMoved = false;
      widget.classList.add('is-dragging');

      const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

      const rect = widget.getBoundingClientRect();
      startX = clientX;
      startY = clientY;
      initialX = rect.left;
      initialY = rect.top;

      // Convert from right/bottom positioning to left/top
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
      widget.style.left = initialX + 'px';
      widget.style.top = initialY + 'px';

      if (e.type === 'touchstart') {
        e.preventDefault();
      }
    }

    function drag(e) {
      if (!isDragging) return;

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      // Check if moved enough to be considered a drag
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        hasMoved = true;
      }

      let newX = initialX + deltaX;
      let newY = initialY + deltaY;

      // Keep widget within viewport bounds
      const widgetRect = widget.getBoundingClientRect();
      const maxX = window.innerWidth - widgetRect.width;
      const maxY = window.innerHeight - widgetRect.height;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      widget.style.left = newX + 'px';
      widget.style.top = newY + 'px';

      if (e.type === 'touchmove') {
        e.preventDefault();
      }
    }

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      widget.classList.remove('is-dragging');

      // Save position to localStorage
      const rect = widget.getBoundingClientRect();
      localStorage.setItem('llyli-widget-position', JSON.stringify({
        x: rect.left,
        y: rect.top
      }));

      // If it was just a click (no drag), allow the link to work
      // If it was a drag, prevent the click
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    // Prevent click from firing after drag
    widget.addEventListener('click', function(e) {
      if (hasMoved) {
        e.preventDefault();
        hasMoved = false;
      }
    });
  }

})();
