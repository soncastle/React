package com.example.React.controller;

import com.example.React.domain.User;
import com.example.React.dto.UserDto;
import com.example.React.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RestMainController {

    private UserService service;

    public RestMainController(UserService service) {
        this.service = service;
    }

    @GetMapping("/api/data")
    public String test() {
        return "Hello React!aefawefef";
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto dto) {
        System.out.println(dto.getUserId());
        System.out.println(dto.getPassword());
        service.register(dto);
        return ResponseEntity.ok("회원가입 성공");
    }

    ;

    @GetMapping("/registerList")
    public List<UserDto> registerList() {
        List<UserDto> users = service.getAllUsers();
        users.forEach(user ->
                System.out.println(user.getUserId()));
        return users;
    };


    @GetMapping("/register")
    public String testGet() {
        return "GET 요청 성공";
    };

}