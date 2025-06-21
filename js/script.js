     // === SCROLL SUAVE ===
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // === HEADER SCROLLED ===
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // === MENÚ MÓVIL ===
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }

        // === CARRUSEL DE TESTIMONIOS ===
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-card');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Auto-advance testimonials every 6 seconds
        setInterval(nextSlide, 6000);

        // === ANIMACIONES AL SCROLL ===
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => observer.observe(element));

        // === FAQ TOGGLE ===
        function toggleFAQ(button) {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('span');

            // Close other FAQs
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('active');
                }
            });

            document.querySelectorAll('.faq-question span').forEach(otherIcon => {
                if (otherIcon !== icon) {
                    otherIcon.textContent = '+';
                }
            });

            // Toggle current FAQ
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                icon.textContent = '+';
            } else {
                answer.classList.add('active');
                icon.textContent = '−';
            }
        }

        // === MODAL FUNCTIONS ===
        function openModal() {
            document.getElementById('contactModal').classList.add('active');
            document.getElementById('modalOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('contactModal').classList.remove('active');
            document.getElementById('modalOverlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal when clicking overlay
        document.getElementById('modalOverlay').addEventListener('click', closeModal);

        // === FORM SUBMISSION ===
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Recopilar datos del formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validación básica
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '#d1d5db';
                }
            });

            if (isValid) {
                // Simular envío exitoso
                alert(`¡Gracias ${data.nombre}! Hemos recibido tu solicitud de presupuesto para ${data.establecimiento} en ${data.ubicacion}. Te contactaremos en las próximas 24 horas al ${data.telefono}.`);
                this.reset();
                closeModal();
            } else {
                alert('Por favor, completa todos los campos marcados como obligatorios (*).');
            }
        });

        // === INICIALIZACIÓN ===
        window.addEventListener('load', function() {
            // Trigger initial animations for hero section
            setTimeout(() => {
                document.querySelectorAll('.hero-section .animate-on-scroll').forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animated');
                    }, index * 200);
                });
            }, 100);
        });