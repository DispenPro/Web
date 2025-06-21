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