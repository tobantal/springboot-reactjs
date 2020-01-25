package com.example.reactjsserver.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.UUID;
import java.util.ArrayList;

@RestController
public class UserController {

	private List<User> users = new ArrayList<>();

	{
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

@Data
@AllArgsConstructor
class User {
	private int id;
	private String uuid;
	private String name;
}
