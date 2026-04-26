package com.plantdisease;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.plantdisease.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class PlantDiseaseBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlantDiseaseBackendApplication.class, args);
    }
}

