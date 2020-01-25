package com.example.reactjsserver.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	private List<User> users = new ArrayList<>();
	
	@PostConstruct
	public void init() {
		users.add(new User(0, UUID.randomUUID().toString(), "Ivan"));
		users.add(new User(1, UUID.randomUUID().toString(), "Masha"));
		users.add(new User(2, UUID.randomUUID().toString(), "Oleg"));
		users.add(new User(3, UUID.randomUUID().toString(), "Petr"));
	}

	@GetMapping("users")
	public List<User> getAllUsers() {
		return users;
	}

}

class User {

	private int id;
	private String uuid;
	private String name;
	
	public User(int id, String uuid, String name) {
		super();
		this.id = id;
		this.uuid = uuid;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public String getUuid() {
		return uuid;
	}

	public String getName() {
		return name;
	}
	
	
	
}
