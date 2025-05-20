package com.example.React.service;

import com.example.React.domain.User;
import com.example.React.dto.UserDto;
import com.example.React.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository Repo;

    public String register(UserDto dto){
        User user = new User();
        user.setUserId(dto.getUserId());
        user.setPassword(dto.getPassword());
        Repo.save(user);
    return "";
    };

}
