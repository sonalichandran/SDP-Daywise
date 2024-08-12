package com.max.apexgrocer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.apexgrocer.model.User;
import com.max.apexgrocer.repo.UserRepo;
import java.util.*;

@Service
public class UserService {
    @Autowired
    UserRepo ur;
    public List<User> getUsers(){
        return ur.findAll();
        //findAll() will execute select * from users;


    }
    public User addUsers(User user)

    {
        return ur.save(user);
    }
    public String deleteuser(Long uid)
    {
        Optional<User> user=ur.findById(uid);
        if(user.isPresent())
        {
        ur.deleteById(uid);
        return "user deleted successfully"+ uid;
        }
        else{
            return "user not found of Id"+uid;
        }
    }
    
}
