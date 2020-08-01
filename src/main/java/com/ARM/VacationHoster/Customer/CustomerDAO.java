package com.ARM.VacationHoster.Customer;

import org.springframework.beans.factory.annotation.Autowired;

public class CustomerDAO {

	@Autowired 
	CustomerRepository customerRepo;
	
	private CustomerEntity insertCustomerToDatabase() {
		CustomerEntity customerEntity = new CustomerEntity();
		return customerRepo.save(customerEntity);
	}
}
