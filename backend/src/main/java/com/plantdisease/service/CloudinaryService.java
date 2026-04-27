package com.plantdisease.service;

import com.cloudinary.Cloudinary;
import com.plantdisease.exception.CustomException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
@AllArgsConstructor
public class CloudinaryService {
    private final Cloudinary cloudinary;

    public String uploadImage(MultipartFile file) {
        try{
            Map uploadResult = cloudinary.uploader().upload(
                    file.getBytes(),
                    Map.of()
            );
            return uploadResult.get("secure_url").toString();
        }catch (Exception e){
            throw new CustomException("Failed to upload image to Cloudinary");
        }
    }
}
