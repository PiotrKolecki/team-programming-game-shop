package agh.fis.customers.controller;

import agh.fis.customers.controller.api.CustomersAuthApi;
import agh.fis.customers.model.CustomerAuthDto;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import agh.fis.customers.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class CustomersAuthController implements CustomersAuthApi {
    private final CustomerService customerService;

    public CustomersAuthController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Override
    public ResponseEntity<CustomerDto> createCustomer(@Valid CustomerRegistrationDto customerRegistrationDto) {
        CustomerDto customerDto = customerService.create(customerRegistrationDto);
        return ResponseEntity.ok(customerDto);
    }

    @Override
    public ResponseEntity<CustomerAuthDto> getAuthCustomer(@Valid String mail) {
        CustomerAuthDto customerAuthDto = customerService.getByMail(mail);
        return ResponseEntity.ok(customerAuthDto);
    }
}