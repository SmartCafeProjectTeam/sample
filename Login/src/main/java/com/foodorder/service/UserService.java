package com.foodorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodorder.entity.UserEntity;
import com.foodorder.repo.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repo;
	
	public UserEntity adduser(UserEntity user) {
		return repo.save(user);
	}
	
	public List<UserEntity> getdata(){
		return repo.findAll();
		
	}
	
	public UserEntity login( String email,String password) {
		return repo.findByEmailAndPassword(email,password);
	}
}
