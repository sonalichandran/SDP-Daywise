package com.example.apexgrocer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long uid;
    private String name;
    private String email;
    private String username;
    private String password;
    
    public User() {
    }
    
    public User(long uid, String name, String email, String username, String password) {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public long getUid() {
        return uid;
    }
    public void setUid(long uid) {
        this.uid = uid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    


    
}
