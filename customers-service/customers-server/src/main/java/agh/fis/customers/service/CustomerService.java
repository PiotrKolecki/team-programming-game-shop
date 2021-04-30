package agh.fis.customers.service;

import agh.fis.customers.model.Customer;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import agh.fis.customers.repository.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CustomerService {
    private static final Logger logger = LoggerFactory.getLogger(CustomerService.class);

    private final ModelMapper modelMapper;
    private final CustomerRepository repository;

    public CustomerService(ModelMapper modelMapper, CustomerRepository repository) {
        this.modelMapper = modelMapper;
        this.repository = repository;
    }

    public CustomerDto create(CustomerRegistrationDto customerRegistrationDto) {
        Customer rawCustomer = modelMapper.map(customerRegistrationDto, Customer.class);
        Customer customer = repository.save(rawCustomer);

        // TODO create shopping cart

        logger.info("Customer of type {} with id {} created", customer.getUserType(), customer.getId());
        return modelMapper.map(customer, CustomerDto.class);
    }

    public CustomerDto getByMailAndPassword(String mail, String password) {
        Optional<Customer> customerOptional = repository.getCustomerByMailAndPassword(mail, password);
        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            logger.info("Returning customer with id " + customer.getId());
            return modelMapper.map(customer, CustomerDto.class);
        }
        logger.info("Customer M:{} P:{} not found", mail, password);
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found");
    }
}