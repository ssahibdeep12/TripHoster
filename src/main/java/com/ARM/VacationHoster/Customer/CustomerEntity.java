package com.ARM.VacationHoster.Customer;

import java.sql.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CustomerEntity {

	@EmbeddedId
	@GeneratedValue
	private long customerID;
	
	private String firstName;
	private String lastName;
	private String emailAddress;
	private long phoneNumber;
	private Date dateOfBirth;
	private String CountryofAddress;
	private String EncryptedPassword;
	private String passportNumber;
	
}
