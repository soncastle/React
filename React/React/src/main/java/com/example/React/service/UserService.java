package com.example.React.service;

import com.example.React.domain.User;
import com.example.React.dto.UserDto;
import com.example.React.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepo;
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }



    public void register(UserDto dto){
        User user = new User();
        user.setUserId(dto.getUserId());
        user.setPassword(dto.getPassword());
        userRepo.save(user);
    };

    public List<UserDto> getAllUsers() {
//        return userRepo.findAll().stream()
//                .map(user -> new UserDto(
//                        user.getId(),
//                        user.getUserId(),
//                        user.getPassword()))
//                .collect(Collectors.toList());

        return userRepo.findAll().stream()
                .map(user -> UserDto.builder()
                        .id(user.getId())
                        .userId(user.getUserId())
                        .password(user.getPassword())
                        .build())
                .collect(Collectors.toList());
    }
}
