package com.plantdisease.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app")
public record AppProperties(Jwt jwt, AiService aiService) {

    public record Jwt(String secret, long expirationMs) {
    }

    public record AiService(String url) {
    }
}

