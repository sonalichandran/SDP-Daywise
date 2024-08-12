package com.example.apexgrocer.service;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.example.apexgrocer.dtos.LoginUserDto;
import com.example.apexgrocer.dtos.RegisterUserDto;
import com.example.apexgrocer.model.User;
import com.example.apexgrocer.repository.Jwtrepo;
import com.example.apexgrocer.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthenticationService {
    private final UserRepository userRepository;
    private final Jwtrepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtUtil;

    public String signup(RegisterUserDto registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder()
                .name(registerRequest.getUsername())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
               
                .role(User.Role.STUDENT)
                .build();
        userRepository.save(user);
        return "User registered successfully.";
    }

    public String login(LoginUserDto loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("role", user.getRole().toString());
        var accessToken = jwtUtil.generateToken(extraClaims, user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        return accessToken;
    }

    private void saveUserToken(User user, String accessToken) {
        var token = Token.builder().user(user).token(accessToken).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_UidAndExpiredFalseAndRevokedFalse(user.getUid());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public String createAdmin() {
        Optional<User> userExist = userRepository.findByEmail("admin@gmail.com");
        if (userExist.isPresent()) {
            return "Admin already exists";
        }

        var user = User.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("Admin@123"))
                .phone("1234567890")
                .address("xyz")
                .role(User.Role.ADMIN)
                .build();
        userRepository.save(user);
        return "Admin registered successfully.";
    }
}
