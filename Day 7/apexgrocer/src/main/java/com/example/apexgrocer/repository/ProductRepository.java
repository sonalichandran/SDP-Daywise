package com.example.apexgrocer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apexgrocer.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
    Optional<Product> findById(Long Id);
    
    
}
