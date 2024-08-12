package com.example.apexgrocer.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apexgrocer.model.User;

public interface UserRepo extends JpaRepository<User,Long>{

    
}
