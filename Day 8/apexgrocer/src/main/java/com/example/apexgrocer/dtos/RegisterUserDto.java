package com.example.apexgrocer.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class RegisterUserDto {
    private String username;
    private String email;
    private String password;
   
}