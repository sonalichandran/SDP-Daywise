package com.example.apexgrocer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apexgrocer.model.Orders;
import com.example.apexgrocer.repository.OrderRepository;
import com.example.apexgrocer.service.OrderService;


import java.util.*;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    OrderService os;
    @Autowired
    OrderRepository or;
    @PostMapping("/register")
    public Orders post(@RequestBody Orders order)
    {
        return or.save(order);
        
    }
    @GetMapping("/getall")
    public List<Orders> getAll()
    {
        return or.findAll();
    }
    @DeleteMapping("/deletebyId/{Id}")
    public String deletebyId(@PathVariable Long Id)
    {
        or.deleteById(Id);
        return "Order of Id "+Id+" deleted successfully";
    }
    @GetMapping("/getbyId/{Id}")
    public Optional<Orders> getbyId(@PathVariable Long Id)
    {
        return or.findById(Id);
    }
    @PutMapping("/putById/{Id}")
    public Orders putById(@PathVariable Long Id,@RequestBody Orders order)
    {
        Optional<Orders> found=or.findById(Id);
        if(found.isPresent())
        {
            Orders existing=found.get();
            existing.setAddress(order.getAddress());
            existing.setNumber(order.getNumber());
            existing.setStatus(order.getStatus());
            existing.setCost(order.getCost());
            return existing;
        }
        return or.save(order);
    }
    
    

    
}
