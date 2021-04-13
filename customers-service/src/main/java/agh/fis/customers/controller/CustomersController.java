package agh.fis.customers.controller;

import agh.fis.customers.controller.api.CustomersApi;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class CustomersController implements CustomersApi {
    private static final Logger logger = LoggerFactory.getLogger(CustomersController.class);

    @Override
    public ResponseEntity<CustomerDto> createCustomer(@Valid CustomerRegistrationDto customerRegistrationDto) {
        return null;
    }

    @Override
    public ResponseEntity<List<CustomerDto>> getAllCustomers(String authorization) {
        return null;
    }

    @Override
    public ResponseEntity<CustomerDto> updateCustomer(String authorization, @Valid CustomerDto customerDto) {
        return null;
    }
}