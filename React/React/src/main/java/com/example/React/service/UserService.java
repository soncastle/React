package com.example.React.service;

import com.example.React.domain.User;
import com.example.React.dto.UserDto;
import com.example.React.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    public UserService(UserRepository userRepo, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepo = userRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }



    public void register(UserDto dto){
        User user = new User();
        Boolean userName = userRepo.existsByUserName(dto.getUserId());
        if(userName){
          return ;
        };
        user.setUserId(dto.getUserId());
        user.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));
        user.setRole("ROLE_USER");
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
