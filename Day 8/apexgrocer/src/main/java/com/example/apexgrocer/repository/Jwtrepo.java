package com.example.apexgrocer.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apexgrocer.model.*;
public interface Jwtrepo extends JpaRepository<Token, String> {
    List<Token> findAllByUser_UidAndExpiredFalseAndRevokedFalse(Long uid);

    Optional<Token> findByToken(String token);
}