package com.example.apexgrocer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.apexgrocer.model.User;
import com.example.apexgrocer.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;
@RestController
@RequestMapping("/request")
public class UserController {
    @Autowired
    //intead of autowired we can also static final import 
    private UserService us;
    @GetMapping("/getusers")
    public List<User> getAllUser() {
        return us.getUsers();
    }
    @PostMapping("/register")
    public User addUser(@RequestBody User u)
    {
        return us.addUsers(u);
        
    }
    @DeleteMapping("/deletebyid")
    public String delete(@PathVariable Long uid)
    {
        return us.deleteuser(uid);
    }


    
}
