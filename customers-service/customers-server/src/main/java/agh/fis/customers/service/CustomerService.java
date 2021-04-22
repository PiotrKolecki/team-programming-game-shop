package agh.fis.customers.service;

import agh.fis.customers.model.Customer;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import agh.fis.customers.repository.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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
}