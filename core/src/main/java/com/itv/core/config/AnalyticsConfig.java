package com.itv.core.config;
import org.apache.sling.caconfig.annotation.Configuration;
import org.apache.sling.caconfig.annotation.Property;

@Configuration(label = "Configuración de Analytics y Cookies", description = "IDs para Google Analytics y Cookiebot")
public @interface AnalyticsConfig {
    
    @Property(label = "Cookiebot ID", description = "ID de Cookiebot para la gestión de cookies (ejemplo: 00000000-0000-0000-0000-000000000000)")
    String cookiebotId() default "";

    @Property(label = "Google Analytics (GA4) ID", description = "ID de seguimiento para Google Analytics (ejemplo: G-XXXXXXXXXX)")
    String googleAnalyticsId() default "";
}
