document.addEventListener('DOMContentLoaded', function() {
    
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
  
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .trainer-card, .pricing-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    
    const animatedElements = document.querySelectorAll('.service-card, .trainer-card, .pricing-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();d
    
   
    let currentSlide = 0;
    const slides = document.querySelectorAll('.trainer-card, .testimonial-card');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        if (index < 0) currentSlide = totalSlides - 1;
        
        const slider = document.querySelector('.trainers-slider, .testimonials-slider');
        slider.scrollTo({
            left: slides[currentSlide].offsetLeft - slider.offsetLeft,
            behavior: 'smooth'
        });
    }
    
    
    setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
    }, 5000);
    
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            form.reset();
        });
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Obrigado por se inscrever com o email ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
});
