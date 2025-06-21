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


        // === GOOGLE ANALYTICS EVENTS ===

        // Tracking de formularios
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            // Evento existente...

            // Añadir tracking de GA4
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    form_name: 'contact_form',
                    form_destination: this.action || 'default',
                    engagement_time_msec: Date.now() - window.performance.timing.navigationStart
                });
            }
        });

        // Tracking de clics en teléfono
        document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
            link.addEventListener('click', function() {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_call', {
                        phone_number: this.href.replace('tel:', ''),
                        event_category: 'engagement',
                        event_label: 'phone_click'
                    });
                }
            });
        });

        // Tracking de scroll profundo
        let scrollDepthTracked = false;
        window.addEventListener('scroll', function() {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent > 75 && !scrollDepthTracked) {
                scrollDepthTracked = true;
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll', {
                        event_category: 'engagement',
                        event_label: '75_percent',
                        value: 75
                    });
                }
            }
        });

        // Tracking de tiempo en página
        let timeOnPageTracked = false;
        setTimeout(function() {
            if (!timeOnPageTracked) {
                timeOnPageTracked = true;
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'timing_complete', {
                        name: 'time_on_page',
                        value: 30000, // 30 segundos
                        event_category: 'engagement'
                    });
                }
            }
        }, 30000);

        // Tracking de clics en servicios por ciudad
        document.querySelectorAll('a[href*="/servicios/"]').forEach(function(link) {
            link.addEventListener('click', function() {
                const city = this.href.split('/servicios/')[1].replace('.html', '');
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'local_service_click', {
                        city: city,
                        event_category: 'local_seo',
                        event_label: 'city_page_navigation'
                    });
                }
            });
        });


        // === SERVICE WORKER REGISTRATION ===
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                        console.log('SW registrado con éxito:', registration.scope);
                    })
                    .catch(function(err) {
                        console.log('SW falló al registrarse:', err);
                    });
            });
        }

        // === PRELOAD OPTIMIZATION ===
        document.addEventListener('DOMContentLoaded', function() {
            // Preload de páginas importantes en hover
            const importantLinks = document.querySelectorAll('a[href*="/servicios/"], a[href*="catalogo"]');

            importantLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    const linkElement = document.createElement('link');
                    linkElement.rel = 'prefetch';
                    linkElement.href = this.href;
                    document.head.appendChild(linkElement);
                }, { once: true });
            });
        });

        // === CORE WEB VITALS OPTIMIZATION ===
        function measureWebVitals() {
            // Medir LCP (Largest Contentful Paint)
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'web_vitals', {
                            event_category: 'Web Vitals',
                            event_label: 'LCP',
                            value: Math.round(entry.startTime),
                            non_interaction: true
                        });
                    }
                }
            }).observe({ type: 'largest-contentful-paint', buffered: true });

            // Medir FID (First Input Delay)
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'web_vitals', {
                            event_category: 'Web Vitals',
                            event_label: 'FID',
                            value: Math.round(entry.processingStart - entry.startTime),
                            non_interaction: true
                        });
                    }
                }
            }).observe({ type: 'first-input', buffered: true });

            // Medir CLS (Cumulative Layout Shift)
            let clsValue = 0;
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }

                if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                        event_category: 'Web Vitals',
                        event_label: 'CLS',
                        value: Math.round(clsValue * 1000),
                        non_interaction: true
                    });
                }
            }).observe({ type: 'layout-shift', buffered: true });
        }

        // Ejecutar mediciones
        if (typeof PerformanceObserver !== 'undefined') {
            measureWebVitals();
        }