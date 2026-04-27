package com.plantdisease.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PredictionResponse {
    private String plant ;
    private String disease ;
    private Float confidence ;
}
