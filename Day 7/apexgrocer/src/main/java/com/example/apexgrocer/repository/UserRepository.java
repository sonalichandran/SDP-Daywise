package com.example.apexgrocer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.apexgrocer.model.User;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    User findByEmail(String email);

    
}
