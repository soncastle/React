package com.example.React.controller;

import com.example.React.dto.UserDto;
import com.example.React.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RestMainController {

    private UserService service;

    @GetMapping("/api/data")
    public String test(){
        return "Hello React!aefawefef";
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto dto) {
        System.out.println(dto.getUserId());
        System.out.println(dto.getPassword());
        service.register(dto);
        return ResponseEntity.ok("회원가입 성공");
    };
}
