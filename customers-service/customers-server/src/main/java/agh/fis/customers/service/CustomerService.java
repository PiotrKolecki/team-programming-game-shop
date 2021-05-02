package agh.fis.customers.service;

import agh.fis.customers.client.ShoppingCartClient;
import agh.fis.customers.model.*;
import agh.fis.customers.repository.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CustomerService {
    private static final Logger logger = LoggerFactory.getLogger(CustomerService.class);

    private final ModelMapper modelMapper;
    private final CustomerRepository repository;
    private final ShoppingCartClient shoppingCartClient;

    public CustomerService(ModelMapper modelMapper, CustomerRepository repository, ShoppingCartClient shoppingCartClient) {
        this.modelMapper = modelMapper;
        this.repository = repository;
        this.shoppingCartClient = shoppingCartClient;
    }

    @Transactional
    public CustomerDto create(CustomerRegistrationDto customerRegistrationDto) {
        Customer rawCustomer = modelMapper.map(customerRegistrationDto, Customer.class);
        Customer customer = repository.save(rawCustomer);

        createCustomerShoppingCart(customer.getId());

        logger.info("Customer of type {} with id {} created", customer.getUserType(), customer.getId());
        return modelMapper.map(customer, CustomerDto.class);
    }

    void createCustomerShoppingCart(int customerId) {
        try {
            shoppingCartClient.createShoppingCart(new ShoppingCartCreationDto().customerId(customerId));
        } catch (Exception e) {
            logger.error("Exception during customer shopping cart creation:", e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to create customer shopping cart");
        }
    }

    public CustomerAuthDto getByMail(String mail) {
        Optional<Customer> customerOptional = repository.getCustomerByMail(mail);
        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            logger.info("Returning customer with id " + customer.getId());
            return modelMapper.map(customer, CustomerAuthDto.class);
        }
        logger.info("Customer M:{} not found", mail);
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found");
    }
}