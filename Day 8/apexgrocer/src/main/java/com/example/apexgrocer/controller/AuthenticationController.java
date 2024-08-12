package com.example.apexgrocer.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.apexgrocer.dtos.LoginUserDto;
import com.example.apexgrocer.dtos.RegisterUserDto;
import com.example.apexgrocer.model.Token;
import com.example.apexgrocer.model.User;
import com.example.apexgrocer.service.AuthenticationService;
import com.example.apexgrocer.service.JwtService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import static org.springframework.http.HttpStatus.OK;


@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authService;

     @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<?> register(@Parameter(description = "Registration details of the user") @RequestBody RegisterUserDto registerRequest) {
        return new ResponseEntity<>(authService.signup(registerRequest), OK);
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
    public ResponseEntity<?> login(@Parameter(description = "Login credentials of the user") @RequestBody LoginUserDto loginRequest) {
        return new ResponseEntity<>(authService.authenticate(loginRequest), OK);
    }

    
}
