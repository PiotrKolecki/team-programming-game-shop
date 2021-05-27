package agh.fis.customers.controller;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.common.auth.CustomerByTokenProvider;
import agh.fis.customers.controller.api.CustomersApi;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class CustomersController implements CustomersApi {
    private final CustomerService customerService;
    private final CustomerByTokenProvider customerByTokenProvider;

    public CustomersController(CustomerService customerService, CustomerByTokenProvider customerByTokenProvider) {
        this.customerService = customerService;
        this.customerByTokenProvider = customerByTokenProvider;
    }

    @Override
    public ResponseEntity<List<CustomerDto>> getAllCustomers(String authorization) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        return customerDtoOpt.map(authCustomerDto -> ResponseEntity.ok(customerService.getAll(authCustomerDto)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    }

    @Override
    public ResponseEntity<CustomerDto> updateCustomer(String authorization, @Valid CustomerDto customerDto) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        return customerDtoOpt.map(authCustomerDto -> ResponseEntity.ok(customerService.update(authCustomerDto, customerDto)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    }

    @Override
    public ResponseEntity<CustomerDto> getCustomerById(String authorization, Integer id) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        return customerDtoOpt.map(authCustomerDto -> ResponseEntity.ok(customerService.getById(authCustomerDto, id)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    }

    @Override
    public ResponseEntity<Void> deleteCustomerById(String authorization, Integer id) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        if (customerDtoOpt.isPresent()) {
            customerService.delete(customerDtoOpt.get(), authorization, id);
            return ResponseEntity.noContent().build();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
    }

}