package com.plantdisease.repository;

import com.plantdisease.entity.Scan;
import com.plantdisease.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScanRepository extends JpaRepository<Scan, Long> {
    List<Scan> findByUserOrderByCreatedAtDesc(User user);
}
