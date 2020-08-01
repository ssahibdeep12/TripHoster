package com.ARM0.VacationHoster.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ARM.VacationHoster.Customer.CustomerEntity;
import com.ARM.VacationHoster.Customer.CustomerRepository;

@RestController
public class VacationHosterController {

	@Autowired CustomerRepository customRepo;
	
	@PostMapping(value="/addUser")
	public void createUser(CustomerEntity customer) {
		customRepo.save(customer);
	}
}
