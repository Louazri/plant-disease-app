package com.plantdisease.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HistoryResponse {
    private String imageUrl;
    private String plant ;
    private String disease ;
    private Float confidence ;
    private LocalDateTime createdAt;
}
