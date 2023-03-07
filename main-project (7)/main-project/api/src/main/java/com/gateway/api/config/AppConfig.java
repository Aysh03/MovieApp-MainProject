package com.gateway.api.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@Configuration
public class AppConfig {
    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder routeLocatorBuilder) {
        return routeLocatorBuilder.routes()
                .route(p -> p
                        .path("/movie-app/**")
                        .uri("lb://movie-service"))
                .route(p -> p
                        .path("/login-auth/**")
                        .uri("lb://AuthenticationApplication"))
                .route(p -> p
                        .path("/feedback-app/**")
                        .uri("lb://producer-service"))
                .route(p -> p
                        .path("/feedback-app-c1/**")
                        .uri("lb://consumer-service"))
                .build();

    }
}