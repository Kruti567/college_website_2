// Load header and footer content
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Set active navigation state after header is loaded
            setActiveNavigation();
            
            // Initialize header scroll effect after header is loaded
            initializeHeaderScrollEffect();
        })
        .catch(error => console.error('Error loading header:', error));
    
    // Load footer if footer placeholder exists
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});


// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        if ((currentPage === 'index.html' || currentPage === '') && linkHref === 'index.html') {
            link.classList.add('active');
        } else if (linkHref.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Header scroll effect - only initialize after header is loaded
function initializeHeaderScrollEffect() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#fff';
                header.style.backdropFilter = 'none';
            }
        }
    });
}

// Smooth scrolling for navigation links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// FAQ Toggle functionality
document.addEventListener('click', function(e) {
    if (e.target.matches('.faq-question')) {
        const answer = e.target.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        // Close all other FAQ answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Toggle current answer
        if (!isActive) {
            answer.classList.add('active');
        }
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation - use setTimeout to ensure elements exist
setTimeout(() => {
    document.querySelectorAll('.feature-card, .testimonial-card, .step, .commitment-card, .facility-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}, 100);

// CTA Button click handlers
document.addEventListener('click', function(e) {
    if (e.target.matches('.cta-button')) {
        if (e.target.textContent.includes('Campus Tour')) {
            alert('Thank you for your interest in visiting our campus! Please contact our admissions office at +91-XXXXXXXXXX to schedule your campus tour.');
        } else {
            alert('Thank you for your interest! Please contact our admissions office for more information.');
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      headerPlaceholder.innerHTML = data;

      // Set active navigation state after header is loaded
      setActiveNavigation();

      // Initialize header scroll effect after header is loaded
      initializeHeaderScrollEffect();
    })
    .catch(error => console.error('Error loading header:', error));

  // Load footer if footer placeholder exists
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }
});

// Use event delegation for menu toggle so it works on all pages, even after dynamic header loading
document.addEventListener('click', (event) => {
  if (event.target.closest('.menu-icon')) {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const menuIcon = headerPlaceholder.querySelector('.menu-icon');
    const navMenu = headerPlaceholder.querySelector('.nav-menu');

    if (menuIcon && navMenu) {
      menuIcon.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }
});

