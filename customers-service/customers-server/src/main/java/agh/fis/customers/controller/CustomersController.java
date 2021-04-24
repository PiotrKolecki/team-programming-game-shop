package agh.fis.customers.controller;

import agh.fis.customers.controller.api.CustomersApi;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import agh.fis.customers.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class CustomersController implements CustomersApi {
    private final CustomerService customerService;

    public CustomersController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Override
    public ResponseEntity<CustomerDto> createCustomer(@Valid CustomerRegistrationDto customerRegistrationDto) {
        CustomerDto customerDto = customerService.create(customerRegistrationDto);
        return ResponseEntity.ok(customerDto);
    }

    @Override
    public ResponseEntity<List<CustomerDto>> getAllCustomers(String authorization) {
        return null;
    }

    @Override
    public ResponseEntity<CustomerDto> getAuthCustomer(@Valid String mail, @Valid String password) {
        CustomerDto customerDto = customerService.getByMailAndPassword(mail, password);
        return ResponseEntity.ok(customerDto);
    }

    @Override
    public ResponseEntity<CustomerDto> updateCustomer(String authorization, @Valid CustomerDto customerDto) {
        return null;
    }

    @Override
    public ResponseEntity<CustomerDto> getCustomerById(String authorization, Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteCustomerById(String authorization, Integer id) {
        return null;
    }

}