package com.ARM0.VacationHoster.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ARM.VacationHoster.Customer.CustomerEntity;
import com.ARM.VacationHoster.Customer.CustomerRepository;

@RestController
@ComponentScan({"com.ARM.VacationHoster.Customer"})
public class VacationHosterController {

	@Autowired private CustomerRepository customRepo;
	
	@PostMapping(value="/addUser")
	public void createUser(@RequestBody CustomerEntity customer) {
		customRepo.save(customer);
	}
	
	
	@GetMapping(value="/getUser{id}")
	public CustomerEntity getUser(CustomerEntity customerEntity) {
		return customRepo.save(customerEntity);
	}
	
	
}
