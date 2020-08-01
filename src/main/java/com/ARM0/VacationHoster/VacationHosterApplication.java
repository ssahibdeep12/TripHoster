package com.ARM0.VacationHoster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class VacationHosterApplication {

	public static void main(String[] args) {
		SpringApplication.run(VacationHosterApplication.class, args);
	}

}
