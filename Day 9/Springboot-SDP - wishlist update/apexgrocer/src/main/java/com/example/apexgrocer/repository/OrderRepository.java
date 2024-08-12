package com.example.apexgrocer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apexgrocer.model.Orders;

public interface OrderRepository extends JpaRepository<Orders,Long> {
    public Optional<Orders> findById(Long Id);
    
}
