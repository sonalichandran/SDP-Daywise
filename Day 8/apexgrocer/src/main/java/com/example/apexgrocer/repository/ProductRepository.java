package com.example.apexgrocer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apexgrocer.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
    
    
}
