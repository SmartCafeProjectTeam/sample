package com.foodorder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.entity.UserEntity;
import com.foodorder.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserService service;

	@GetMapping("/getdata")
	public List<UserEntity> getdata() {
		return service.getdata();
	}

	@PostMapping("/savedata")
	public UserEntity adduser(@RequestBody UserEntity user) {
		return service.adduser(user);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserEntity request) {

	    UserEntity user = service.login(
	        request.getEmail(),
	        request.getPassword()
	    );

	    if (user == null) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                .body("Invalid email or password");
	    }

	    return ResponseEntity.ok(user);
	}

}
