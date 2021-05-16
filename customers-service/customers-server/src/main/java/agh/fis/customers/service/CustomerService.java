package agh.fis.customers.service;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.AuthUserType;
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

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<CustomerDto> getAll(AuthCustomerDto authCustomerDto) {
        if (authCustomerDto.getUserType() == AuthUserType.STAFF) {
            return repository.findAll().stream()
                    .map(customer -> modelMapper.map(customer, CustomerDto.class))
                    .collect(Collectors.toList());
        }
        String authMail = authCustomerDto.getMail();
        logger.error(authMail + " tried to get all customers but it's not authorized");
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, authMail + " cannot get all customers");
    }

    public CustomerDto getById(AuthCustomerDto authCustomerDto, int id) {
        if (authCustomerDto.getUserType() == AuthUserType.STAFF || authCustomerDto.getId() == id) {
            Customer customer = repository.findById(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found"));
            return modelMapper.map(customer, CustomerDto.class);
        }
        String authMail = authCustomerDto.getMail();
        logger.error(authMail + " tried to get customer with id {} but it's not authorized", id);
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, authMail + " cannot get customer with id " + id);
    }
}