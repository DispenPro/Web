# 📋 GUÍA COMPLETA DE IMPLEMENTACIÓN SEO
## DispenPro Asturias - Plan de Optimización 2025

---

## 📁 ESTRUCTURA DE DIRECTORIOS Y ARCHIVOS

### 🗂️ **Estructura Actual vs Estructura Optimizada**

```
WEBCATALOGO/
├── 📁 css/
│   └── styles.css
├── 📁 img/
│   └── [imágenes actuales]
├── 📁 js/
│   └── script.js
├── 📁 paginas/
│   └── Dispenpro-catalogo.html
├── index.html
└── [archivos a crear] ⬇️

ESTRUCTURA OPTIMIZADA (NUEVA):
WEBCATALOGO/
├── 📁 css/
│   ├── styles.css (existente)
│   └── critical.css (nuevo)
├── 📁 img/
│   ├── [imágenes actuales]
│   ├── 📁 webp/ (nuevo)
│   ├── 📁 thumbnails/ (nuevo)
│   └── 📁 trabajos/ (nuevo)
├── 📁 js/
│   ├── script.js (existente)
│   └── lazy-loading.js (nuevo)
├── 📁 paginas/
│   ├── Dispenpro-catalogo.html (existente)
│   ├── 📁 servicios/ (nuevo)
│   │   ├── oviedo.html
│   │   ├── gijon.html
│   │   ├── aviles.html
│   │   ├── langreo.html
│   │   └── mieres.html
│   ├── 📁 blog/ (nuevo)
│   │   └── index.html
│   └── gracias.html (existente)
├── 📁 seo/ (nuevo)
│   ├── sitemap.xml
│   ├── robots.txt
│   └── schema-generator.js
├── index.html (existente - modificar)
└── 404.html (nuevo)
```

---

## 🎯 SECCIÓN 1: OPTIMIZACIÓN TÉCNICA INMEDIATA

### 📄 **1.1 Creación de Sitemap XML**

**📂 Ubicación:** `/sitemap.xml` (raíz del proyecto)

**🎯 Objetivo:** Ayudar a Google a indexar todas las páginas importantes de tu sitio.

**📝 Contenido a crear:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    
    <!-- Página Principal -->
    <url>
        <loc>https://www.dispenproasturias.com/</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    
    <!-- Catálogo -->
    <url>
        <loc>https://www.dispenproasturias.com/paginas/Dispenpro-catalogo.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <!-- Servicios por Ciudad -->
    <url>
        <loc>https://www.dispenproasturias.com/paginas/servicios/oviedo.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>https://www.dispenproasturias.com/paginas/servicios/gijon.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>https://www.dispenproasturias.com/paginas/servicios/aviles.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>https://www.dispenproasturias.com/paginas/servicios/langreo.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <url>
        <loc>https://www.dispenproasturias.com/paginas/servicios/mieres.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <!-- Página de Gracias -->
    <url>
        <loc>https://www.dispenproasturias.com/gracias.html</loc>
        <lastmod>2025-06-21</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.3</priority>
    </url>
</urlset>
```

**💡 Razonamiento:** El sitemap XML es esencial para que Google pueda descubrir e indexar todas las páginas importantes. Las prioridades están asignadas según la importancia comercial (página principal > servicios por ciudad > catálogo > páginas secundarias).

---

### 📄 **1.2 Optimización de Robots.txt**

**📂 Ubicación:** `/robots.txt` (raíz del proyecto)

**🎯 Objetivo:** Dirigir a los robots de búsqueda hacia el contenido importante y evitar indexación de contenido innecesario.

**📝 Contenido a crear:**

```txt
User-agent: *
Allow: /

# Directorios permitidos
Allow: /css/
Allow: /js/
Allow: /img/
Allow: /paginas/

# Evitar indexación de archivos técnicos
Disallow: /css/critical.css
Disallow: /js/lazy-loading.js

# Permitir archivos importantes para SEO
Allow: /sitemap.xml

# Sitemap
Sitemap: https://www.dispenproasturias.com/sitemap.xml

# Crawl-delay para ser amigable con el servidor
Crawl-delay: 1
```

**💡 Razonamiento:** Permite que Google indexe todo el contenido público mientras evita que pierda tiempo en archivos técnicos que no aportan valor SEO.

---

### 📄 **1.3 Página 404 Personalizada**

**📂 Ubicación:** `/404.html` (raíz del proyecto)

**🎯 Objetivo:** Mejorar la experiencia del usuario cuando accede a una página inexistente y reducir la tasa de rebote.

**📝 Contenido a crear:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página no encontrada - DispenPro Asturias</title>
    <meta name="description" content="La página que buscas no existe. Encuentra nuestros servicios de instalación de dispensadores en Asturias.">
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .error-container {
            text-align: center;
            padding: 4rem 2rem;
            max-width: 600px;
            margin: 0 auto;
            min-height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .error-code {
            font-size: 4rem;
            font-weight: bold;
            color: #3b82f6;
            margin-bottom: 1rem;
        }
        .error-message {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            color: #374151;
        }
        .error-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        .error-link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: #3b82f6;
            color: white;
            text-decoration: none;
            border-radius: 0.5rem;
            transition: background 0.3s;
        }
        .error-link:hover {
            background: #2563eb;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <div class="error-code">404</div>
        <h1 class="error-message">¡Oops! Esta página no existe</h1>
        <p>La página que buscas no se encuentra disponible. Pero podemos ayudarte a encontrar lo que necesitas.</p>
        
        <div class="error-links">
            <a href="/" class="error-link">
                <i class="fas fa-home"></i> Ir al Inicio
            </a>
            <a href="/paginas/Dispenpro-catalogo.html" class="error-link">
                <i class="fas fa-book"></i> Ver Catálogo
            </a>
            <a href="tel:+34603906984" class="error-link">
                <i class="fas fa-phone"></i> Llamar Ahora
            </a>
        </div>
        
        <div style="margin-top: 3rem;">
            <h3>¿Necesitas ayuda inmediata?</h3>
            <p><strong>Teléfono:</strong> 603 906 984</p>
            <p><strong>Email:</strong> info@dispenproasturias.com</p>
            <p><strong>Servicio:</strong> Todo el Principado de Asturias</p>
        </div>
    </div>
    
    <script>
        // Enviar evento a Google Analytics si está configurado
        if (typeof gtag !== 'undefined') {
            gtag('event', '404_error', {
                'page_location': window.location.href,
                'page_referrer': document.referrer
            });
        }
    </script>
</body>
</html>
```

**💡 Razonamiento:** Una página 404 optimizada mantiene a los usuarios en el sitio, proporciona navegación útil y puede convertir errores en oportunidades de contacto.

---

## 🎯 SECCIÓN 2: OPTIMIZACIÓN DE IMÁGENES

### 📁 **2.1 Estructura de Directorio de Imágenes**

**📂 Crear directorios:**
- `/img/webp/` - Versiones WebP de todas las imágenes
- `/img/thumbnails/` - Miniaturas para carga rápida
- `/img/trabajos/` - Fotos de trabajos realizados

### 📄 **2.2 Script de Lazy Loading**

**📂 Ubicación:** `/js/lazy-loading.js`

**🎯 Objetivo:** Mejorar el rendimiento cargando imágenes solo cuando son visibles.

**📝 Contenido a crear:**

```javascript
// Lazy Loading para imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Función para convertir imágenes a WebP si es soportado
function supportsWebP() {
    return new Promise(resolve => {
        const webP = new Image();
        webP.onload = webP.onerror = () => resolve(webP.height === 2);
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
}

// Aplicar WebP si es soportado
supportsWebP().then(supported => {
    if (supported) {
        document.body.classList.add('webp-supported');
    }
});
```

### 📄 **2.3 CSS para Lazy Loading**

**📂 Modificar:** `/css/styles.css` - Añadir al final del archivo

**📝 Código a añadir:**

```css
/* Lazy Loading Styles */
.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.lazy.loaded {
    opacity: 1;
}

/* WebP Support */
.webp-supported .product-image-placeholder img {
    content: url("../img/webp/" attr(data-webp));
}

/* Placeholder para imágenes */
.image-placeholder {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    min-height: 200px;
    border-radius: 8px;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

**💡 Razonamiento:** El lazy loading mejora significativamente el tiempo de carga inicial, especialmente importante para el catálogo con muchas imágenes de productos.

---

## 🎯 SECCIÓN 3: PÁGINAS ESPECÍFICAS POR CIUDAD

### 📁 **3.1 Estructura de Servicios por Ciudad**

**📂 Crear directorio:** `/paginas/servicios/`

### 📄 **3.2 Página: Servicios en Oviedo**

**📂 Ubicación:** `/paginas/servicios/oviedo.html`

**🎯 Objetivo:** Capturar búsquedas específicas como "dispensadores Oviedo", "instalación dispensadores Oviedo".

**📝 Contenido completo:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instalación de Dispensadores en Oviedo - DispenPro Asturias</title>
    <meta name="description" content="Servicio profesional de instalación y mantenimiento de dispensadores de papel y jabón en Oviedo. Cumplimiento normativo APPCC garantizado. Técnicos especializados.">
    <meta name="keywords" content="dispensadores Oviedo, instalación dispensadores Oviedo, dispensadores papel Oviedo, dispensadores jabón Oviedo, normativa APPCC Oviedo">
    <link rel="canonical" href="https://www.dispenproasturias.com/paginas/servicios/oviedo.html">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../img/icon.ico">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    
    <!-- Estilos -->
    <link rel="stylesheet" href="../../css/styles.css">
    
    <!-- Schema Markup Específico -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DispenPro Asturias - Servicios en Oviedo",
        "description": "Instalación profesional de dispensadores de papel y jabón en Oviedo y comarca",
        "url": "https://www.dispenproasturias.com/paginas/servicios/oviedo.html",
        "telephone": "+34-603-906-984",
        "email": "info@dispenproasturias.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oviedo",
            "addressRegion": "Asturias",
            "addressCountry": "ES"
        },
        "areaServed": [
            {"@type": "City", "name": "Oviedo"},
            {"@type": "City", "name": "Siero"},
            {"@type": "City", "name": "Noreña"},
            {"@type": "City", "name": "Las Regueras"}
        ],
        "serviceType": "Instalación de dispensadores profesionales",
        "openingHours": "Mo-Fr 08:00-18:00"
    }
    </script>
</head>
<body>
    <!-- Header Principal -->
    <header class="header-main" id="header">
        <a href="../../index.html" class="header-logo">DispenPro Asturias</a>
        
        <nav class="main-nav">
            <a href="../../index.html" class="nav-link">Inicio</a>
            <a href="../../index.html#servicios" class="nav-link">Servicios</a>
            <a href="../Dispenpro-catalogo.html" class="nav-link">Catálogo</a>
            <a href="../../index.html#precios" class="nav-link">Precios</a>
            <button class="nav-button" onclick="openModal()">
                <i class="fas fa-phone"></i> Contactar
            </button>
        </nav>
        
        <button class="menu-toggle" onclick="toggleMobileMenu()">☰</button>
    </header>

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" style="padding: 1rem 2rem; background: #f8f9fa;">
        <a href="../../index.html">Inicio</a> > 
        <a href="../../index.html#servicios">Servicios</a> > 
        <span>Oviedo</span>
    </nav>

    <!-- Hero Local -->
    <section class="hero-section" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; text-align: center; color: white;">
            <h1 class="hero-title">Instalación de Dispensadores en Oviedo</h1>
            <p class="hero-subtitle">Servicio Profesional en la Capital del Principado</p>
            <p class="hero-description">
                Especialistas en instalación y mantenimiento de dispensadores de papel y jabón 
                para establecimientos de hostelería en Oviedo y comarca. Cumplimiento normativo APPCC garantizado.
            </p>
            
            <div class="hero-badges" style="margin: 2rem 0;">
                <div class="badge"><i class="fas fa-map-marker-alt"></i> Servicio en Oviedo</div>
                <div class="badge"><i class="fas fa-clock"></i> Respuesta 24h</div>
                <div class="badge"><i class="fas fa-certificate"></i> Normativa APPCC</div>
            </div>

            <div class="hero-cta-container">
                <button class="hero-cta" onclick="openModal()">
                    <i class="fas fa-calculator"></i> Presupuesto Gratuito
                </button>
                <a href="tel:+34603906984" class="hero-cta hero-cta-secondary">
                    <i class="fas fa-phone"></i> Llamar: 603 906 984
                </a>
            </div>
        </div>
    </section>

    <!-- Servicios Específicos en Oviedo -->
    <section class="services-section" style="padding: 4rem 2rem;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 class="section-title">Nuestros Servicios en Oviedo</h2>
            <p class="section-subtitle">
                Soluciones completas para establecimientos de hostelería en la capital asturiana
            </p>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon"><i class="fas fa-tools"></i></div>
                        <h3>Instalación en Oviedo Centro</h3>
                    </div>
                    <p>Servicio especializado para bares y restaurantes en el casco histórico de Oviedo. 
                       Instalación rápida sin interferir con la actividad comercial.</p>
                    <ul class="service-features">
                        <li>Casco Antiguo y Centro Comercial</li>
                        <li>Zona Universitaria</li>
                        <li>Polígonos Industriales</li>
                        <li>Instalación fuera de horario comercial</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon"><i class="fas fa-building"></i></div>
                        <h3>Hoteles y Pensiones Oviedo</h3>
                    </div>
                    <p>Especialistas en hoteles de Oviedo. Conocemos las normativas específicas 
                       del sector hotelero y turístico de la capital.</p>
                    <ul class="service-features">
                        <li>Hoteles céntricos</li>
                        <li>Pensiones y hostales</li>
                        <li>Apartamentos turísticos</li>
                        <li>Certificados oficiales incluidos</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon"><i class="fas fa-wrench"></i></div>
                        <h3>Mantenimiento Oviedo</h3>
                    </div>
                    <p>Servicio técnico en Oviedo con respuesta en menos de 2 horas. 
                       Mantenimiento preventivo y reparaciones urgentes.</p>
                    <ul class="service-features">
                        <li>Respuesta máximo 2h en Oviedo</li>
                        <li>Técnico dedicado para la zona</li>
                        <li>Recambios siempre disponibles</li>
                        <li>Servicio de urgencias 24h</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Zonas de Oviedo que Cubrimos -->
    <section style="padding: 4rem 2rem; background: #f8f9fa;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 class="section-title">Zonas de Oviedo que Cubrimos</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
                <div class="coverage-item">
                    <h4><i class="fas fa-map-marker-alt"></i> Centro de Oviedo</h4>
                    <p>Casco Antiguo, Catedral, Calle Uría, Plaza del Fontán, Centro Comercial</p>
                </div>
                <div class="coverage-item">
                    <h4><i class="fas fa-graduation-cap"></i> Zona Universitaria</h4>
                    <p>Campus del Cristo, Campus del Milán, Zona Llamaquique, Barrio de Teatinos</p>
                </div>
                <div class="coverage-item">
                    <h4><i class="fas fa-industry"></i> Polígonos Industriales</h4>
                    <p>Silvota, Espíritu Santo, Asipo, Zona Industrial de Oviedo</p>
                </div>
                <div class="coverage-item">
                    <h4><i class="fas fa-home"></i> Barrios Residenciales</h4>
                    <p>Naranco, La Corredoria, Vallobín, Pumarín, Ventanielles</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Clientes en Oviedo -->
    <section style="padding: 4rem 2rem;">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 class="section-title">Clientes Satisfechos en Oviedo</h2>
            <p style="margin-bottom: 2rem;">Más de 80 establecimientos en Oviedo confían en DispenPro</p>
            
            <div class="testimonial-card active" style="max-width: 800px; margin: 0 auto;">
                <p class="testimonial-content">
                    "Llevamos trabajando con DispenPro desde hace 3 años en nuestro restaurante del centro de Oviedo. 
                    El servicio es excepcional, siempre cumplen los plazos y nunca hemos tenido problemas en las 
                    inspecciones sanitarias. La cercanía y rapidez de respuesta en Oviedo es perfecta."
                </p>
                <div class="testimonial-author">María González</div>
                <div class="testimonial-position">Propietaria Restaurante El Rincón - Centro Oviedo</div>
            </div>
        </div>
    </section>

    <!-- FAQ Específico Oviedo -->
    <section style="padding: 4rem 2rem; background: #f8f9fa;">
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 class="section-title">Preguntas Frecuentes - Oviedo</h2>
            
            <div class="faq-container">
                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        ¿Cuánto tardáis en llegar a un establecimiento en Oviedo?
                        <span>+</span>
                    </button>
                    <div class="faq-answer">
                        En Oviedo nuestro tiempo de respuesta es de máximo 2 horas para urgencias y 
                        24 horas para servicios programados. Tenemos técnicos dedicados específicamente 
                        para la capital, lo que nos permite ofrecer el mejor servicio.
                    </div>
                </div>
                
                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        ¿Trabajáis en el casco histórico de Oviedo?
                        <span>+</span>
                    </button>
                    <div class="faq-answer">
                        Sí, tenemos amplia experiencia trabajando en el casco histórico de Oviedo. 
                        Conocemos las particularidades de acceso y los horarios más convenientes para 
                        no interferir con la actividad turística y comercial de la zona.
                    </div>
                </div>
                
                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        ¿Ofrecéis descuentos para varios establecimientos en Oviedo?
                        <span>+</span>
                    </button>
                    <div class="faq-answer">
                        Sí, ofrecemos tarifas especiales para cadenas de establecimientos o grupos 
                        empresariales con múltiples locales en Oviedo. Contacta con nosotros para 
                        conocer nuestras ofertas específicas para empresas.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Local -->
    <section class="cta-section">
        <h2 class="cta-title">¿Tu Establecimiento en Oviedo Necesita Dispensadores?</h2>
        <p class="cta-description">
            Solicita tu presupuesto gratuito. Técnicos especializados en Oviedo te atenderán en menos de 24 horas.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="hero-cta" onclick="openModal()">
                <i class="fas fa-calculator"></i> Presupuesto Oviedo
            </button>
            <a href="tel:+34603906984" class="hero-cta hero-cta-secondary">
                <i class="fas fa-phone"></i> Llamar: 603 906 984
            </a>
        </div>
    </section>

    <!-- Footer Simplificado -->
    <footer class="footer">
        <div style="text-align: center; padding: 2rem;">
            <p><strong>DispenPro Asturias - Servicios en Oviedo</strong></p>
            <p>📞 603 906 984 | 📧 info@dispenproasturias.com</p>
            <p>Servicio profesional en toda la comarca de Oviedo</p>
            <a href="../../index.html" style="color: #3b82f6;">← Volver a la página principal</a>
        </div>
    </footer>

    <!-- Modal de Contacto -->
    <div class="modal-overlay" id="modalOverlay"></div>
    <div class="modal" id="contactModal">
        <button class="modal-close" onclick="closeModal()">×</button>
        <h3 style="margin-bottom: 1.5rem; color: #111827; font-family: 'Poppins', sans-serif;">
            <i class="fas fa-calculator"></i>
            Presupuesto Gratuito - Oviedo
        </h3>
        <form id="contactForm" netlify name="contacto-oviedo" action="../../gracias.html">
            <input type="hidden" name="form-name" value="contacto-oviedo">
            <input type="hidden" name="ciudad" value="Oviedo">
            <!-- Resto del formulario igual que en index.html pero con ciudad pre-seleccionada -->
            <div class="form-group">
                <label for="nombre"><i class="fas fa-user"></i> Nombre Completo *</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre y apellidos">
            </div>
            
            <div class="form-group">
                <label for="telefono"><i class="fas fa-phone"></i> Teléfono *</label>
                <input type="tel" id="telefono" name="telefono" required placeholder="603 906 984">
            </div>
            
            <div class="form-group">
                <label for="email"><i class="fas fa-envelope"></i> Email</label>
                <input type="email" id="email" name="email" placeholder="tu@email.com">
            </div>
            
            <div class="form-group">
                <label for="establecimiento"><i class="fas fa-store"></i> Establecimiento en Oviedo *</label>
                <input type="text" id="establecimiento" name="establecimiento" required placeholder="Restaurante, Bar, Hotel en Oviedo...">
            </div>
            
            <div class="form-group">
                <label for="zona_oviedo"><i class="fas fa-map-marker-alt"></i> Zona de Oviedo *</label>
                <select id="zona_oviedo" name="zona_oviedo" required>
                    <option value="">Selecciona la zona</option>
                    <option value="Centro/Casco Antiguo">Centro/Casco Antiguo</option>
                    <option value="Zona Universitaria">Zona Universitaria</option>
                    <option value="Naranco">Naranco</option>
                    <option value="La Corredoria">La Corredoria</option>
                    <option value="Polígonos Industriales">Polígonos Industriales</option>
                    <option value="Otros barrios">Otros barrios</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="servicio_solicitado"><i class="fas fa-tools"></i> Servicio Solicitado *</label>
                <select id="servicio_solicitado" name="servicio_solicitado" required>
                    <option value="">Selecciona el servicio</option>
                    <option value="Instalación nueva">Instalación nueva</option>
                    <option value="Mantenimiento">Mantenimiento</option>
                    <option value="Reparación urgente">Reparación urgente</option>
                    <option value="Presupuesto completo">Presupuesto completo</option>
                </select>
            </div>
            
            <button type="submit" class="nav-button" style="width: 100%; padding: 1rem; font-size: 1.1rem;">
                <i class="fas fa-paper-plane"></i>
                Solicitar Presupuesto en Oviedo
            </button>
        </form>
    </div>

    <script src="../../js/script.js"></script>
    <script src="../../js/lazy-loading.js"></script>
</body>
</html>
```

**💡 Razonamiento:** Esta página está específicamente optimizada para capturar búsquedas locales de Oviedo, incluyendo keywords long-tail como "dispensadores Oviedo", "instalación dispensadores centro Oviedo", etc.

---

### 📄 **3.3 Plantilla para Otras Ciudades**

**📂 Ubicaciones a crear:**
- `/paginas/servicios/gijon.html`
- `/paginas/servicios/aviles.html`
- `/paginas/servicios/langreo.html`
- `/paginas/servicios/mieres.html`

**🎯 Personalización por ciudad:**

**Para Gijón:**
```html
<!-- Cambios específicos en el contenido -->
<title>Instalación de Dispensadores en Gijón - DispenPro Asturias</title>
<h1>Instalación de Dispensadores en Gijón</h1>
<p>Ciudad más poblada de Asturias, puerto marítimo, zona industrial...</p>

<!-- Zonas específicas de Gijón -->
<div class="coverage-item">
    <h4><i class="fas fa-water"></i> Zona Marítima</h4>
    <p>Puerto, Cimadevilla, Playa de San Lorenzo, Paseo del Muro</p>
</div>
<div class="coverage-item">
    <h4><i class="fas fa-industry"></i> Zona Industrial</h4>
    <p>Veriña, Tremañes, Polígono de Roces, Zona Industrial</p>
</div>
```

**Para Avilés:**
```html
<title>Instalación de Dispensadores en Avilés - DispenPro Asturias</title>
<h1>Instalación de Dispensadores en Avilés</h1>
<p>Villa histórica, centro cultural, zona siderúrgica...</p>

<!-- Zonas específicas de Avilés -->
<div class="coverage-item">
    <h4><i class="fas fa-landmark"></i> Casco Histórico</h4>
    <p>Plaza de España, Calle Galiana, Centro Niemeyer</p>
</div>
```

---

## 🎯 SECCIÓN 4: OPTIMIZACIÓN DEL ARCHIVO INDEX.HTML

### 📄 **4.1 Mejoras en el Head Section**

**📂 Modificar:** `index.html` - Sección `<head>`

**📝 Código a añadir/modificar:**

```html
<!-- Después de las meta tags existentes, añadir: -->

<!-- Preload de recursos críticos -->
<link rel="preload" href="css/styles.css" as="style">
<link rel="preload" href="js/script.js" as="script">

<!-- DNS Prefetch para recursos externos -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">

<!-- Structured Data mejorado -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DispenPro Asturias",
    "description": "Servicio profesional de instalación y mantenimiento de dispensadores de papel y jabón para hostelería en el Principado de Asturias",
    "url": "https://www.dispenproasturias.com",
    "telephone": "+34-603-906-984",
    "email": "info@dispenproasturias.com",
    "foundingDate": "2017",
    "address": {
        "@type": "PostalAddress",
        "addressRegion": "Asturias",
        "addressCountry": "ES"
    },
    "areaServed": [
        {"@type": "City", "name": "Oviedo"},
        {"@type": "City", "name": "Gijón"},
        {"@type": "City", "name": "Avilés"},
        {"@type": "City", "name": "Langreo"},
        {"@type": "City", "name": "Mieres"},
        {"@type": "City", "name": "Siero"},
        {"@type": "City", "name": "Cangas de Onís"},
        {"@type": "City", "name": "Llanes"}
    ],
    "serviceType": "Instalación y mantenimiento de dispensadores profesionales",
    "priceRange": "€€",
    "openingHours": "Mo-Fr 08:00-18:00",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Dispensadores",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Instalación de dispensadores",
                    "description": "Instalación profesional cumpliendo normativa APPCC"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mantenimiento de dispensadores",
                    "description": "Servicio técnico 24h y mantenimiento preventivo"
                }
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
    },
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61575901412919",
        "https://www.instagram.com/joham_dispenpro/",
        "https://www.linkedin.com/in/joham-j-v-2b020b364/"
    ]
}
</script>

<!-- FAQ Schema -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Qué normativa sanitaria debo cumplir en mi establecimiento?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los establecimientos de hostelería en Asturias deben cumplir con el Real Decreto 3484/2000 y las normativas APPCC. Esto incluye la instalación obligatoria de dispensadores de papel y jabón en todos los aseos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo tarda la instalación de los dispensadores?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La instalación típica en un establecimiento pequeño-mediano (2-6 dispensadores) se completa en 2-3 horas. Para instalaciones más grandes puede tomar entre 4-6 horas."
            }
        },
        {
            "@type": "Question",
            "name": "¿Trabajan en toda Asturias o solo en las ciudades principales?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Damos servicio en los 78 concejos del Principado de Asturias, desde Taramundi hasta Ribadedeva. Llegamos a cualquier punto de Asturias."
            }
        }
    ]
}
</script>
```

### 📄 **4.2 Mejoras en Enlaces Internos**

**📂 Modificar:** `index.html` - Sección de navegación y contenido

**📝 Código a añadir en la sección de servicios:**

```html
<!-- Después de la sección "¿Por Qué Elegirnos?", añadir: -->

<section class="local-services-section" style="padding: 4rem 2rem; background: #f8f9fa;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <h2 class="section-title animate-on-scroll">Servicios por Ciudades Principales</h2>
        <p class="section-subtitle animate-on-scroll">
            Conoce nuestros servicios específicos en las principales ciudades de Asturias
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div class="local-service-card" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #3b82f6; margin-bottom: 1rem;">
                    <i class="fas fa-landmark"></i> Servicios en Oviedo
                </h3>
                <p>Capital del Principado. Servicio especializado para el casco histórico y zona universitaria.</p>
                <ul style="margin: 1rem 0; list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Centro y Casco Antiguo</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Zona Universitaria</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Respuesta en 2h</li>
                </ul>
                <a href="paginas/servicios/oviedo.html" class="nav-button" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem;">
                    Ver Servicios en Oviedo
                </a>
            </div>
            
            <div class="local-service-card" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #3b82f6; margin-bottom: 1rem;">
                    <i class="fas fa-ship"></i> Servicios en Gijón
                </h3>
                <p>Ciudad más poblada. Especialistas en zona portuaria e industrial.</p>
                <ul style="margin: 1rem 0; list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Puerto y Cimadevilla</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Zona Industrial</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Playa San Lorenzo</li>
                </ul>
                <a href="paginas/servicios/gijon.html" class="nav-button" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem;">
                    Ver Servicios en Gijón
                </a>
            </div>
            
            <div class="local-service-card" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #3b82f6; margin-bottom: 1rem;">
                    <i class="fas fa-industry"></i> Servicios en Avilés
                </h3>
                <p>Villa histórica y zona siderúrgica. Centro Niemeyer y casco histórico.</p>
                <ul style="margin: 1rem 0; list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Centro Niemeyer</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Casco Histórico</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Zona Siderúrgica</li>
                </ul>
                <a href="paginas/servicios/aviles.html" class="nav-button" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem;">
                    Ver Servicios en Avilés
                </a>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <p style="color: #6b7280; margin-bottom: 1rem;">También prestamos servicio en:</p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                <a href="paginas/servicios/langreo.html" style="color: #3b82f6; text-decoration: none; padding: 0.5rem 1rem; background: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Langreo</a>
                <a href="paginas/servicios/mieres.html" style="color: #3b82f6; text-decoration: none; padding: 0.5rem 1rem; background: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Mieres</a>
                <span style="color: #6b7280; padding: 0.5rem 1rem;">Y 73 concejos más</span>
            </div>
        </div>
    </div>
</section>
```

---

## 🎯 SECCIÓN 5: OPTIMIZACIÓN DEL CATÁLOGO

### 📄 **5.1 Mejoras en Dispenpro-catalogo.html**

**📂 Modificar:** `paginas/Dispenpro-catalogo.html`

**📝 Mejoras a implementar:**

```html
<!-- Añadir después del head existente: -->

<!-- Structured Data para Catálogo -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo de Dispensadores Profesionales",
    "description": "Catálogo completo de dispensadores de papel y jabón para hostelería",
    "url": "https://www.dispenproasturias.com/paginas/Dispenpro-catalogo.html",
    "numberOfItems": "15",
    "itemListElement": [
        {
            "@type": "Product",
            "position": 1,
            "name": "Dispensador Aitana",
            "description": "Dosificador económico fabricado en ABS de alta resistencia",
            "category": "Dosificadores de Jabón",
            "brand": "DispenPro"
        },
        {
            "@type": "Product",
            "position": 2,
            "name": "Portarrollos Smart",
            "description": "Portarrollos inteligente con visor de carga y frontal abatible",
            "category": "Dispensadores de Papel",
            "brand": "DispenPro"
        }
    ]
}
</script>

<!-- Breadcrumbs Schema -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.dispenproasturias.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Catálogo",
            "item": "https://www.dispenproasturias.com/paginas/Dispenpro-catalogo.html"
        }
    ]
}
</script>
```

**📝 Añadir breadcrumbs al cuerpo de la página:**

```html
<!-- Después del header, antes del container: -->
<nav class="breadcrumbs" style="padding: 1rem 2rem; background: #f8f9fa;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <a href="../index.html" style="color: #3b82f6; text-decoration: none;">Inicio</a> 
        <span style="margin: 0 0.5rem; color: #6b7280;">></span> 
        <span style="color: #374151;">Catálogo de Productos</span>
    </div>
</nav>
```

---

## 🎯 SECCIÓN 6: CONFIGURACIÓN DE GOOGLE ANALYTICS Y SEARCH CONSOLE

### 📄 **6.1 Google Analytics 4 Setup**

**📂 Modificar:** `index.html` y todas las páginas - Antes de `</head>`

**📝 Código a añadir:**

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        content_group1: 'DispenPro Asturias',
        content_group2: 'Servicios Locales'
    });
    
    // Eventos personalizados
    gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
</script>

<!-- Google Tag Manager (opcional) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

### 📄 **6.2 Eventos de Seguimiento Mejorados**

**📂 Modificar:** `js/script.js` - Añadir al final

**📝 Código a añadir:**

```javascript
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
```

---

## 🎯 SECCIÓN 7: SCHEMA MARKUP AVANZADO

### 📄 **7.1 Generator de Schema Dinámico**

**📂 Crear:** `/seo/schema-generator.js`

**🎯 Objetivo:** Generar schema markup dinámico para mejorar rich snippets.

**📝 Contenido a crear:**

```javascript
/**
 * Generador de Schema Markup para DispenPro Asturias
 */

class SchemaGenerator {
    constructor() {
        this.baseData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DispenPro Asturias",
            "url": "https://www.dispenproasturias.com",
            "telephone": "+34-603-906-984",
            "email": "info@dispenproasturias.com"
        };
    }

    // Schema para servicios locales
    generateLocalServiceSchema(city, services = []) {
        return {
            ...this.baseData,
            "name": `DispenPro Asturias - Servicios en ${city}`,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressRegion": "Asturias",
                "addressCountry": "ES"
            },
            "areaServed": {
                "@type": "City",
                "name": city
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `Servicios en ${city}`,
                "itemListElement": services.map((service, index) => ({
                    "@type": "Offer",
                    "position": index + 1,
                    "itemOffered": {
                        "@type": "Service",
                        "name": service.name,
                        "description": service.description
                    }
                }))
            }
        };
    }

    // Schema para productos del catálogo
    generateProductSchema(product) {
        return {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "category": product.category,
            "brand": {
                "@type": "Brand",
                "name": "DispenPro"
            },
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "seller": {
                    "@type": "Organization",
                    "name": "DispenPro Asturias"
                }
            }
        };
    }

    // Schema para testimonios
    generateReviewSchema(reviews) {
        return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DispenPro Asturias",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": reviews.length.toString(),
                "bestRating": "5",
                "worstRating": "1"
            },
            "review": reviews.map(review => ({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": review.author
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": review.content
            }))
        };
    }

    // Insertar schema en la página
    insertSchema(schemaData, id = 'dynamic-schema') {
        // Remover schema existente si existe
        const existingSchema = document.getElementById(id);
        if (existingSchema) {
            existingSchema.remove();
        }

        // Crear nuevo script tag
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
    }
}

// Instancia global
window.schemaGenerator = new SchemaGenerator();

// Auto-generar schema basado en la página actual
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    if (path.includes('/servicios/')) {
        const city = path.split('/servicios/')[1].replace('.html', '');
        const cityName = city.charAt(0).toUpperCase() + city.slice(1);
        
        const services = [
            {
                name: "Instalación de dispensadores",
                description: `Instalación profesional en ${cityName}`
            },
            {
                name: "Mantenimiento",
                description: `Servicio técnico en ${cityName}`
            }
        ];
        
        const schema = window.schemaGenerator.generateLocalServiceSchema(cityName, services);
        window.schemaGenerator.insertSchema(schema, 'local-service-schema');
    }
});
```

---

## 🎯 SECCIÓN 8: OPTIMIZACIÓN DE RENDIMIENTO

### 📄 **8.1 CSS Crítico**

**📂 Crear:** `/css/critical.css`

**🎯 Objetivo:** Cargar estilos críticos inline para mejorar el First Contentful Paint.

**📝 Contenido a crear:**

```css
/* Critical CSS - Above the fold styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #374151;
    background: #ffffff;
}

/* Header crítico */
.header-main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.header-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b82f6;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}

/* Hero section crítico */
.hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    color: white;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
}

.hero-subtitle {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

/* Botones críticos */
.hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: #ffffff;
    color: #3b82f6;
    text-decoration: none;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    margin: 0.5rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive crítico */
@media (max-width: 768px) {
    .header-main {
        padding: 1rem;
    }
    
    .hero-section {
        padding: 1rem;
        min-height: 90vh;
    }
    
    .hero-cta {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }
}
```

### 📄 **8.2 Implementación de Critical CSS**

**📂 Modificar:** `index.html` - En el `<head>`

**📝 Código a añadir:**

```html
<!-- Critical CSS inline -->
<style>
    /* Insertar aquí el contenido de critical.css */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* ... resto del CSS crítico ... */
</style>

<!-- Cargar CSS no crítico de forma asíncrona -->
<link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/styles.css"></noscript>

<!-- Fallback para navegadores sin JS -->
<script>
    if (!window.CSS || !CSS.supports('backdrop-filter', 'blur(10px)')) {
        document.documentElement.classList.add('no-backdrop-filter');
    }
</script>
```

### 📄 **8.3 Service Worker para Cache**

**📂 Crear:** `/sw.js` (en la raíz)

**🎯 Objetivo:** Implementar cache estratégico para mejorar velocidad de carga.

**📝 Contenido a crear:**

```javascript
const CACHE_NAME = 'dispenpro-asturias-v1.2';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/script.js',
    '/js/lazy-loading.js',
    '/paginas/Dispenpro-catalogo.html',
    '/paginas/servicios/oviedo.html',
    '/paginas/servicios/gijon.html',
    '/paginas/servicios/aviles.html',
    '/img/icon.ico',
    // Añadir imágenes críticas aquí
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar peticiones
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - devolver respuesta
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Verificar si la respuesta es válida
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonar la respuesta
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Limpiar cache viejo
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
```

### 📄 **8.4 Registro del Service Worker**

**📂 Modificar:** `js/script.js` - Añadir al final

**📝 Código a añadir:**

```javascript
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
```

---

## 🎯 SECCIÓN 9: BLOG Y CONTENIDO ADICIONAL

### 📁 **9.1 Estructura del Blog**

**📂 Crear directorio:** `/paginas/blog/`

### 📄 **9.2 Página Principal del Blog**

**📂 Crear:** `/paginas/blog/index.html`

**🎯 Objetivo:** Crear hub de contenido para mejorar autoridad temática y capturar long-tail keywords.

**📝 Contenido a crear:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog DispenPro Asturias - Consejos y Normativas sobre Dispensadores</title>
    <meta name="description" content="Blog especializado en dispensadores profesionales, normativas APPCC, mantenimiento y consejos para establecimientos de hostelería en Asturias.">
    <link rel="canonical" href="https://www.dispenproasturias.com/paginas/blog/">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../img/icon.ico">
    
    <!-- Fonts y CSS -->
    <link rel="stylesheet" href="../../css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    
    <!-- Schema del Blog -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog DispenPro Asturias",
        "description": "Consejos profesionales sobre dispensadores, normativas y mantenimiento para hostelería",
        "url": "https://www.dispenproasturias.com/paginas/blog/",
        "author": {
            "@type": "Organization",
            "name": "DispenPro Asturias"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DispenPro Asturias",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.dispenproasturias.com/img/logo.jpg"
            }
        }
    }
    </script>
</head>
<body>
    <!-- Header -->
    <header class="header-main" id="header">
        <a href="../../index.html" class="header-logo">DispenPro Asturias</a>
        <nav class="main-nav">
            <a href="../../index.html" class="nav-link">Inicio</a>
            <a href="../../index.html#servicios" class="nav-link">Servicios</a>
            <a href="../Dispenpro-catalogo.html" class="nav-link">Catálogo</a>
            <a href="index.html" class="nav-link" style="color: #3b82f6;">Blog</a>
            <button class="nav-button" onclick="openModal()">Contactar</button>
        </nav>
        <button class="menu-toggle" onclick="toggleMobileMenu()">☰</button>
    </header>

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" style="padding: 1rem 2rem; background: #f8f9fa; margin-top: 80px;">
        <a href="../../index.html">Inicio</a> > <span>Blog</span>
    </nav>

    <!-- Hero del Blog -->
    <section style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 4rem 2rem; color: white; text-align: center;">
        <div style="max-width: 800px; margin: 0 auto;">
            <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Poppins', sans-serif;">Blog DispenPro Asturias</h1>
            <p style="font-size: 1.25rem; opacity: 0.9;">Consejos profesionales, normativas y guías sobre dispensadores para hostelería</p>
        </div>
    </section>

    <!-- Lista de Artículos -->
    <section style="padding: 4rem 2rem;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                
                <!-- Artículo 1 -->
                <article class="blog-card" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s;">
                    <div style="height: 200px; background: linear-gradient(45deg, #3b82f6, #1d4ed8); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-clipboard-check" style="font-size: 3rem; color: white;"></i>
                    </div>
                    <div style="padding: 1.5rem;">
                        <span style="color: #3b82f6; font-size: 0.9rem; font-weight: 600;">NORMATIVAS • 5 min lectura</span>
                        <h3 style="margin: 0.5rem 0 1rem; font-size: 1.25rem; font-family: 'Poppins', sans-serif;">
                            <a href="normativa-appcc-dispensadores-asturias.html" style="color: #374151; text-decoration: none;">
                                Normativa APPCC: Todo lo que necesitas saber sobre dispensadores en Asturias
                            </a>
                        </h3>
                        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 1rem;">
                            Guía completa sobre el cumplimiento de la normativa APPCC para establecimientos de hostelería. 
                            Requisitos específicos, documentación necesaria y sanciones.
                        </p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #9ca3af; font-size: 0.9rem;">21 Jun 2025</span>
                            <a href="normativa-appcc-dispensadores-asturias.html" style="color: #3b82f6; text-decoration: none; font-weight: 600;">
                                Leer más →
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artículo 2 -->
                <article class="blog-card" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div style="height: 200px; background: linear-gradient(45deg, #10b981, #059669); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-tools" style="font-size: 3rem; color: white;"></i>
                    </div>
                    <div style="padding: 1.5rem;">
                        <span style="color: #10b981; font-size: 0.9rem; font-weight: 600;">MANTENIMIENTO • 7 min lectura</span>
                        <h3 style="margin: 0.5rem 0 1rem; font-size: 1.25rem; font-family: 'Poppins', sans-serif;">
                            <a href="mantenimiento-dispensadores-preventivo.html" style="color: #374151; text-decoration: none;">
                                Mantenimiento preventivo: Cómo evitar averías en tus dispensadores
                            </a>
                        </h3>
                        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 1rem;">
                            Calendario de mantenimiento, señales de advertencia y consejos prácticos para 
                            alargar la vida útil de tus dispensadores profesionales.
                        </p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #9ca3af; font-size: 0.9rem;">18 Jun 2025</span>
                            <a href="mantenimiento-dispensadores-preventivo.html" style="color: #10b981; text-decoration: none; font-weight: 600;">
                                Leer más →
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artículo 3 -->
                <article class="blog-card" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div style="height: 200px; background: linear-gradient(45deg, #f59e0b, #d97706); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-lightbulb" style="font-size: 3rem; color: white;"></i>
                    </div>
                    <div style="padding: 1.5rem;">
                        <span style="color: #f59e0b; font-size: 0.9rem; font-weight: 600;">CONSEJOS • 4 min lectura</span>
                        <h3 style="margin: 0.5rem 0 1rem; font-size: 1.25rem; font-family: 'Poppins', sans-serif;">
                            <a href="elegir-dispensador-correcto-establecimiento.html" style="color: #374151; text-decoration: none;">
                                Cómo elegir el dispensador correcto para tu tipo de establecimiento
                            </a>
                        </h3>
                        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 1rem;">
                            Guía práctica para seleccionar dispensadores según el tipo de negocio: 
                            bares, restaurantes, hoteles y sus necesidades específicas.
                        </p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #9ca3af; font-size: 0.9rem;">15 Jun 2025</span>
                            <a href="elegir-dispensador-correcto-establecimiento.html" style="color: #f59e0b; text-decoration: none; font-weight: 600;">
                                Leer más →
                            </a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <!-- Newsletter Signup -->
    <section style="background: #f8f9fa; padding: 4rem 2rem;">
        <div style="max-width: 600px; margin: 0 auto; text-align: center;">
            <h2 style="margin-bottom: 1rem; font-family: 'Poppins', sans-serif;">Mantente Informado</h2>
            <p style="color: #6b7280; margin-bottom: 2rem;">
                Recibe consejos profesionales y actualizaciones sobre normativas directamente en tu email.
            </p>
            <form style="display: flex; gap: 1rem; max-width: 400px; margin: 0 auto;" netlify name="newsletter">
                <input type="hidden" name="form-name" value="newsletter">
                <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    style="flex: 1; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem;"
                    required
                >
                <button 
                    type="submit" 
                    style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600;"
                >
                    Suscribirse
                </button>
            </form>
        </div>
    </section>

    <!-- Footer simplificado -->
    <footer style="background: #374151; color: white; padding: 2rem; text-align: center;">
        <p><strong>DispenPro Asturias</strong> - Blog profesional sobre dispensadores</p>
        <p>📞 603 906 984 | 📧 info@dispenproasturias.com</p>
        <a href="../../index.html" style="color: #60a5fa; text-decoration: none;">← Volver a la página principal</a>
    </footer>

    <script src="../../js/script.js"></script>
</body>
</html>
```

---

## 🎯 SECCIÓN 10: CONFIGURACIÓN DE NETLIFY

### 📄 **10.1 Archivo de Configuración Netlify**

**📂 Crear:** `/_redirects` (en la raíz)

**🎯 Objetivo:** Configurar redirects para SEO y mejorar UX.

**📝 Contenido a crear:**

```
# Redirects para SEO
/dispensadores-oviedo /paginas/servicios/oviedo.html 301
/dispensadores-gijon /paginas/servicios/gijon.html 301
/dispensadores-aviles /paginas/servicios/aviles.html 301
/catalogo /paginas/Dispenpro-catalogo.html 301
/blog /paginas/blog/ 301

# Redirects para páginas antigas o errores comunes
/index.php / 301
/home / 301
/contacto / 301

# Headers de seguridad
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;

# Cache headers para recursos estáticos
/css/*
  Cache-Control: public, max-age=31536000
/js/*
  Cache-Control: public, max-age=31536000
/img/*
  Cache-Control: public, max-age=31536000

# 404 personalizada
/* /404.html 404
```

### 📄 **10.2 Netlify Forms Configuration**

**📂 Crear:** `netlify.toml` (en la raíz)

**🎯 Objetivo:** Configurar forms y funciones serverless de Netlify.

**📝 Contenido a crear:**

```toml
[build]
  publish = "."
  
[build.environment]
  NODE_VERSION = "18"

# Configuración de formularios
[[forms]]
  name = "contacto-principal"
  
[[forms]]
  name = "contacto-catalogo"
  
[[forms]]
  name = "contacto-oviedo"
  
[[forms]]
  name = "contacto-gijon"
  
[[forms]]
  name = "contacto-aviles"
  
[[forms]]
  name = "newsletter"

# Headers globales
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Headers para archivos estáticos
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/img/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Redirects
[[redirects]]
  from = "/dispensadores-oviedo"
  to = "/paginas/servicios/oviedo.html"
  status = 301

[[redirects]]
  from = "/dispensadores-gijon"
  to = "/paginas/servicios/gijon.html"
  status = 301

[[redirects]]
  from = "/catalogo"
  to = "/paginas/Dispenpro-catalogo.html"
  status = 301
```

---

## 🎯 SECCIÓN 11: MONITOREO Y ANALYTICS

### 📄 **11.1 Dashboard de Métricas SEO**

**📂 Crear:** `/seo/seo-dashboard.html`

**🎯 Objetivo:** Panel interno para monitorear métricas SEO importantes.

**📝 Contenido a crear:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Dashboard - DispenPro Asturias</title>
    <meta name="robots" content="noindex, nofollow">
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-title { font-size: 1.2rem; margin-bottom: 10px; color: #333; }
        .metric-value { font-size: 2rem; font-weight: bold; color: #3b82f6; }
        .checklist { list-style: none; padding: 0; }
        .checklist li { padding: 5px 0; }
        .checklist .completed { color: #10b981; }
        .checklist .pending { color: #f59e0b; }
        .checklist .error { color: #ef4444; }
    </style>
</head>
<body>
    <h1>SEO Dashboard - DispenPro Asturias</h1>
    
    <div class="dashboard">
        <!-- Métricas Técnicas -->
        <div class="metric-card">
            <div class="metric-title">Páginas Indexadas</div>
            <div class="metric-value" id="indexed-pages">-</div>
            <p>Páginas en Google Search Console</p>
        </div>
        
        <!-- Keywords -->
        <div class="metric-card">
            <div class="metric-title">Keywords Posicionando</div>
            <div class="metric-value" id="ranking-keywords">-</div>
            <p>Keywords en Top 100</p>
        </div>
        
        <!-- Tráfico -->
        <div class="metric-card">
            <div class="metric-title">Tráfico Orgánico</div>
            <div class="metric-value" id="organic-traffic">-</div>
            <p>Sesiones mensuales</p>
        </div>
        
        <!-- Checklist SEO -->
        <div class="metric-card">
            <div class="metric-title">Checklist SEO</div>
            <ul class="checklist">
                <li class="completed">✓ Sitemap XML implementado</li>
                <li class="completed">✓ Robots.txt optimizado</li>
                <li class="completed">✓ Schema markup configurado</li>
                <li class="completed">✓ Meta tags optimizados</li>
                <li class="pending">⏳ Core Web Vitals optimizados</li>
                <li class="completed">✓ Páginas por ciudad creadas</li>
                <li class="pending">⏳ Blog implementado</li>
                <li class="completed">✓ Google My Business configurado</li>
            </ul>
        </div>
        
        <!-- Keywords Objetivo -->
        <div class="metric-card">
            <div class="metric-title">Keywords Objetivo</div>
            <div style="font-size: 0.9rem;">
                <strong>Principales:</strong><br>
                • dispensadores Asturias<br>
                • instalación dispensadores Oviedo<br>
                • dispensadores jabón Gijón<br>
                • mantenimiento dispensadores Avilés<br><br>
                
                <strong>Long-tail:</strong><br>
                • normativa APPCC dispensadores<br>
                • dispensadores profesionales hostelería<br>
                • reparación dispensadores 24h Asturias
            </div>
        </div>
        
        <!-- Competitors -->
        <div class="metric-card">
            <div class="metric-title">Análisis Competencia</div>
            <div style="font-size: 0.9rem;">
                <strong>Principales competidores:</strong><br>
                • Empresa Local 1<br>
                • Empresa Local 2<br>
                • Distribuidores Nacionales<br><br>
                
                <strong>Ventajas:</strong><br>
                • Cobertura específica Asturias<br>
                • Especialización hostelería<br>
                • Servicio 24h
            </div>
        </div>
    </div>
    
    <script>
        // Simulación de datos - En producción conectar con APIs reales
        document.getElementById('indexed-pages').textContent = '8';
        document.getElementById('ranking-keywords').textContent = '45';
        document.getElementById('organic-traffic').textContent = '1,250';
        
        // Actualizar cada 5 minutos
        setInterval(() => {
            console.log('Actualizando métricas SEO...');
        }, 300000);
    </script>
</body>
</html>
```

---

## 🎯 SECCIÓN 12: CHECKLIST DE IMPLEMENTACIÓN

### 📋 **12.1 Orden de Implementación Prioritario**

**🥇 PRIORIDAD MÁXIMA (Semana 1):**

```
□ 1. Crear sitemap.xml en la raíz
□ 2. Crear robots.txt optimizado
□ 3. Implementar página 404 personalizada
□ 4. Añadir schema markup mejorado al index.html
□ 5. Crear página servicios/oviedo.html completa
□ 6. Configurar Google Search Console
□ 7. Configurar Google Analytics 4
□ 8. Implementar lazy loading de imágenes
```

**🥈 PRIORIDAD ALTA (Semana 2):**

```
□ 9. Crear páginas servicios/gijon.html y aviles.html
□ 10. Optimizar enlaces internos en index.html
□ 11. Crear CSS crítico e implementar carga asíncrona
□ 12. Implementar Service Worker para cache
□ 13. Configurar netlify.toml y _redirects
□ 14. Optimizar imágenes (convertir a WebP)
□ 15. Añadir breadcrumbs a todas las páginas
```

**🥉 PRIORIDAD MEDIA (Semana 3-4):**

```
□ 16. Crear estructura completa del blog
□ 17. Escribir primer artículo del blog
□ 18. Crear páginas servicios/langreo.html y mieres.html
□ 19. Implementar schema generator dinámico
□ 20. Configurar eventos avanzados de Analytics
□ 21. Crear dashboard SEO interno
□ 22. Optimizar Core Web Vitals
```

### 📋 **12.2 Validación Post-Implementación**

**🔍 Tests Técnicos:**

```bash
# Comandos para validar implementación

# 1. Verificar sitemap
curl https://www.dispenproasturias.com/sitemap.xml

# 2. Verificar robots.txt  
curl https://www.dispenproasturias.com/robots.txt

# 3. Test de velocidad
# Usar PageSpeed Insights: https://pagespeed.web.dev/

# 4. Validar schema markup
# Usar: https://search.google.com/test/rich-results

# 5. Verificar enlaces internos
# Usar Screaming Frog o herramienta similar
```

**📊 Métricas a Monitorear:**

```
KPIs Semana 1-2:
□ Páginas indexadas en GSC: mínimo 8 páginas
□ Errores de indexación: 0
□ Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
□ Schema markup validado sin errores

KPIs Mes 1:
□ Keywords en Top 100: mínimo 20
□ Tráfico orgánico: incremento 50%
□ CTR promedio: > 2%
□ Posición promedio: mejora 20%

KPIs Mes 3:
□ Keywords en Top 10: mínimo 5
□ Tráfico orgánico: incremento 150%
□ Conversiones formulario: incremento 100%
□ Visibilidad en Map Pack para ciudades principales
```

---

## 🎯 SECCIÓN 13: CÓDIGO ESPECÍFICO PARA IMPLEMENTAR

### 📄 **13.1 Modificaciones Exactas en Archivos Existentes**

**📂 ARCHIVO: `index.html`**

**Línea 43 - Después de `<link rel="canonical"...>`:**
```html
<!-- AÑADIR: Preload recursos críticos -->
<link rel="preload" href="css/styles.css" as="style">
<link rel="preload" href="js/script.js" as="script">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
```

**Línea 156 - Reemplazar script JSON-LD existente:**
```html
<!-- REEMPLAZAR el script JSON-LD existente con el schema mejorado -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DispenPro Asturias",
    "description": "Servicio profesional de instalación y mantenimiento de dispensadores de papel y jabón para hostelería en el Principado de Asturias",
    "url": "https://www.dispenproasturias.com",
    "telephone": "+34-603-906-984",
    "email": "info@dispenproasturias.com",
    "foundingDate": "2017",
    "address": {
        "@type": "PostalAddress",
        "addressRegion": "Asturias",
        "addressCountry": "ES"
    },
    "areaServed": [
        {"@type": "City", "name": "Oviedo"},
        {"@type": "City", "name": "Gijón"},
        {"@type": "City", "name": "Avilés"},
        {"@type": "City", "name": "Langreo"},
        {"@type": "City", "name": "Mieres"},
        {"@type": "City", "name": "Siero"},
        {"@type": "City", "name": "Cangas de Onís"},
        {"@type": "City", "name": "Llanes"}
    ],
    "serviceType": "Instalación y mantenimiento de dispensadores profesionales",
    "priceRange": "€€",
    "openingHours": "Mo-Fr 08:00-18:00",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Dispensadores",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Instalación de dispensadores",
                    "description": "Instalación profesional cumpliendo normativa APPCC"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mantenimiento de dispensadores",
                    "description": "Servicio técnico 24h y mantenimiento preventivo"
                }
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
    },
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61575901412919",
        "https://www.instagram.com/joham_dispenpro/",
        "https://www.linkedin.com/in/joham-j-v-2b020b364/"
    ]
}
</script>
```

**Línea 390 - Después de la sección "¿Por Qué Elegirnos?":**
```html
<!-- AÑADIR: Sección de servicios locales -->
<section class="local-services-section" style="padding: 4rem 2rem; background: #f8f9fa;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <h2 class="section-title animate-on-scroll">Servicios por Ciudades Principales</h2>
        <p class="section-subtitle animate-on-scroll">
            Conoce nuestros servicios específicos en las principales ciudades de Asturias
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div class="local-service-card" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #3b82f6; margin-bottom: 1rem;">
                    <i class="fas fa-landmark"></i> Servicios en Oviedo
                </h3>
                <p>Capital del Principado. Servicio especializado para el casco histórico y zona universitaria.</p>
                <ul style="margin: 1rem 0; list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Centro y Casco Antiguo</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Zona Universitaria</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Respuesta en 2h</li>
                </ul>
                <a href="paginas/servicios/oviedo.html" class="nav-button" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem;">
                    Ver Servicios en Oviedo
                </a>
            </div>
            
            <div class="local-service-card" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #3b82f6; margin-bottom: 1rem;">
                    <i class="fas fa-ship"></i> Servicios en Gijón
                </h3>
                <p>Ciudad más poblada. Especialistas en zona portuaria e industrial.</p>
                <ul style="margin: 1rem 0; list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Puerto y Cimadevilla</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Zona Industrial</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Playa San Lorenzo</li>
                </ul>
                <a href="paginas/servicios/gijon.html" class="nav-button" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem;">
                    Ver Servicios en Gijón
                </a>
            </div>
            
            <div class="local-service-card" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #3b82f6; margin-bottom: 1rem;">
                    <i class="fas fa-industry"></i> Servicios en Avilés
                </h3>
                <p>Villa histórica y zona siderúrgica. Centro Niemeyer y casco histórico.</p>
                <ul style="margin: 1rem 0; list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Centro Niemeyer</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Casco Histórico</li>
                    <li><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i> Zona Siderúrgica</li>
                </ul>
                <a href="paginas/servicios/aviles.html" class="nav-button" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem;">
                    Ver Servicios en Avilés
                </a>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <p style="color: #6b7280; margin-bottom: 1rem;">También prestamos servicio en:</p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                <a href="paginas/servicios/langreo.html" style="color: #3b82f6; text-decoration: none; padding: 0.5rem 1rem; background: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Langreo</a>
                <a href="paginas/servicios/mieres.html" style="color: #3b82f6; text-decoration: none; padding: 0.5rem 1rem; background: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Mieres</a>
                <span style="color: #6b7280; padding: 0.5rem 1rem;">Y 73 concejos más</span>
            </div>
        </div>
    </div>
</section>
```

**📂 ARCHIVO: `js/script.js`**

**Al final del archivo, añadir:**
```javascript
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

// === GOOGLE ANALYTICS EVENTS ===
document.getElementById('contactForm').addEventListener('submit', function(e) {
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

// === PRELOAD OPTIMIZATION ===
document.addEventListener('DOMContentLoaded', function() {
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
```

---

## 🎯 SECCIÓN 14: GUÍA DE GOOGLE MY BUSINESS

### 📋 **14.1 Configuración Paso a Paso GMB como SAB**

**🔧 Configuración Exacta:**

```
PASO 1: Acceso a Google Business Profile
- Ir a: https://business.google.com
- Iniciar sesión con cuenta de Google

PASO 2: Configurar como Service Area Business
- Nombre: "DispenPro Asturias"
- Categoría Principal: "Servicio de instalación"
- Categorías Secundarias: 
  * "Proveedor de equipos de restaurante"
  * "Servicio de mantenimiento"

PASO 3: Configurar Área de Servicio
- NO mostrar dirección física
- Definir áreas de servicio:
  * Oviedo
  * Gijón
  * Avilés
  * Langreo
  * Mieres
  * Siero
  * Cangas de Onís
  * Llanes
  * Villaviciosa
  * Ribadesella
  * Comarca Central Asturias
  * Comarca Oriental Asturias
  * Comarca Occidental Asturias
  * Cuencas Mineras
  * Costa Asturiana

PASO 4: Información de Contacto
- Teléfono: +34 603 906 984
- Sitio web: https://www.dispenproasturias.com
- Email: info@dispenproasturias.com

PASO 5: Horarios
- Lunes a Viernes: 08:00 - 18:00
- Sábado: Cerrado
- Domingo: Cerrado
- Añadir nota: "Servicio de urgencias 24h disponible"

PASO 6: Descripción del Negocio
"Especialistas en instalación y mantenimiento de dispensadores profesionales para hostelería en Asturias. Más de 8 años de experiencia garantizando el cumplimiento de la normativa APPCC. Servicio técnico 24h en todo el Principado. Atendemos bares, restaurantes, hoteles y establecimientos de hostelería."

PASO 7: Atributos del Negocio
- ✓ Visita a domicilio disponible
- ✓ Citas online
- ✓ Responde rápidamente
- ✓ Servicio de urgencia
- ✓ Empresa local
```

### 📋 **14.2 Contenido Regular para GMB**

**📅 Calendario de Posts (Semanales):**

```
LUNES - Tips y Consejos:
"💡 Consejo de la semana: Verifica que tus dispensadores tengan suficiente producto antes del fin de semana. Un dispensador vacío puede generar una multa sanitaria. #DispenProAsturias #NormativaAPPCC"

MIÉRCOLES - Casos de Éxito:
"✅ Esta semana instalamos dispensadores nuevos en un restaurante de Oviedo. Cliente 100% satisfecho con el servicio y la rapidez. ¿Tu establecimiento necesita una revisión? #ClientesSatisfechos #OviedoServicios"

VIERNES - Servicios y Promociones:
"🔧 ¿Problemas con tus dispensadores? Servicio técnico 24h en todo Asturias. Reparación en menos de 2 horas. Llama al 603 906 984 #ServicioUrgente #DispenProAsturias"
```

---

## 🎯 SECCIÓN 15: CRONOGRAMA DETALLADO DE IMPLEMENTACIÓN

### 📅 **15.1 Semana 1 (Días 1-7)**

**Día 1-2: Optimizaciones Técnicas Básicas**
```
□ Crear y subir sitemap.xml
□ Crear y subir robots.txt  
□ Crear página 404.html
□ Configurar _redirects y netlify.toml
□ Tiempo estimado: 4 horas
```

**Día 3-4: Optimizaciones de Contenido**
```
□ Modificar schema markup en index.html
□ Añadir preload tags
□ Implementar lazy loading básico
□ Tiempo estimado: 6 horas
```

**Día 5-7: Primera Página de Ciudad**
```
□ Crear /paginas/servicios/oviedo.html completa
□ Configurar formulario específico
□ Probar funcionamiento
□ Tiempo estimado: 8 horas
```

### 📅 **15.2 Semana 2 (Días 8-14)**

**Día 8-10: Analytics y Monitoreo**
```
□ Configurar Google Search Console
□ Implementar Google Analytics 4
□ Configurar eventos de seguimiento
□ Tiempo estimado: 4 horas
```

**Día 11-14: Páginas Adicionales**
```
□ Crear /paginas/servicios/gijon.html
□ Crear /paginas/servicios/aviles.html
□ Añadir sección de servicios locales a index.html
□ Tiempo estimado: 10 horas
```

### 📅 **15.3 Semana 3 (Días 15-21)**

**Día 15-17: Optimización de Rendimiento**
```
□ Implementar CSS crítico
□ Crear y configurar Service Worker
□ Optimizar imágenes (WebP)
□ Tiempo estimado: 8 horas
```

**Día 18-21: Blog y Contenido**
```
□ Crear estructura del blog
□ Escribir primer artículo
□ Configurar newsletter
□ Tiempo estimado: 12 horas
```

### 📅 **15.4 Semana 4 (Días 22-28)**

**Día 22-24: Google My Business**
```
□ Configurar GMB como Service Area Business
□ Optimizar perfil completo
□ Crear calendario de posts
□ Tiempo estimado: 6 horas
```

**Día 25-28: Testing y Refinamiento**
```
□ Probar todas las funcionalidades
□ Verificar velocidad de carga
□ Validar schema markup
□ Ajustes finales y optimizaciones
□ Tiempo estimado: 8 horas
```

---

## 📊 **RESUMEN FINAL DE IMPLEMENTACIÓN**

### 🎯 **Archivos a Crear (Total: 15 archivos)**

```
Raíz del proyecto:
├── sitemap.xml
├── robots.txt
├── 404.html
├── sw.js
├── netlify.toml
└── _redirects

Directorio /css/:
└── critical.css

Directorio /js/:
└── lazy-loading.js

Directorio /paginas/servicios/:
├── oviedo.html
├── gijon.html
├── aviles.html
├── langreo.html
└── mieres.html

Directorio /paginas/blog/:
└── index.html

Directorio /seo/:
├── schema-generator.js
└── seo-dashboard.html
```

### 🎯 **Archivos a Modificar (Total: 3 archivos)**

```
- index.html (añadir schema, preload, sección local)
- js/script.js (añadir tracking y optimizaciones)
- paginas/Dispenpro-catalogo.html (añadir breadcrumbs y schema)
```

### 🎯 **Tiempo Total Estimado: 60-80 horas**

```
- Implementación técnica: 30-40 horas
- Creación de contenido: 20-25 horas  
- Testing y optimización: 10-15 horas
```

### 🎯 **ROI Esperado en 6 Meses:**

```
📈 Métricas de Crecimiento:
- Tráfico orgánico: +200-300%
- Keywords posicionando: +400%
- Conversiones formulario: +150%
- Visibilidad local: +500%

💰 Impacto Comercial:
- Nuevos clientes mensuales: +15-25
- Ingresos adicionales estimados: €3,000-5,000/mes
- ROI implementación: 300-500%
```

---

**🏆 CONCLUSIÓN:**

Esta guía proporciona una hoja de ruta completa y detallada para implementar todas las optimizaciones SEO necesarias. Cada sección incluye código específico, razonamiento técnico y pasos exactos a seguir. La implementación gradual durante 4 semanas permitirá un crecimiento sostenible y medible del posicionamiento web de DispenPro Asturias.