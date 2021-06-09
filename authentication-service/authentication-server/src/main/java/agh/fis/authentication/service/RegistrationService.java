package agh.fis.authentication.service;

import agh.fis.authentication.client.CustomerServiceClient;
import agh.fis.authentication.exception.DownlineServiceConnectionException;
import agh.fis.authentication.exception.UserAlreadyExistsException;
import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.RegistrationDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import feign.FeignException;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class RegistrationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RegistrationService.class);

    private final CustomerServiceClient customerServiceClient;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    public RegistrationService(CustomerServiceClient customerServiceClient,
                               ModelMapper modelMapper,
                               PasswordEncoder passwordEncoder) {
        this.customerServiceClient = customerServiceClient;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public Optional<AuthCustomerDto> register(RegistrationDto registrationDto) {
        try {
            return Optional.of(registrationDto)
                    .map(registration -> modelMapper.map(registration, CustomerRegistrationDto.class))
                    .map(this::hashPassword)
                    .map(customerServiceClient::register)
                    .map(customer -> modelMapper.map(customer, AuthCustomerDto.class));
        } catch (FeignException e) {
            LOGGER.warn("Exception while executing customers service call: " + e.getMessage());
            if (e.status() == HttpStatus.CONFLICT.value()) {
                throw new UserAlreadyExistsException("user already exists: " + registrationDto);
            }
            throw new DownlineServiceConnectionException("Problem connecting downline services");
        } catch (Exception e) {
            LOGGER.warn("Exception while user registration: " + e.getMessage());
            return Optional.empty();
        }
    }

    private CustomerRegistrationDto hashPassword(CustomerRegistrationDto registration) {
        registration.setPassword(passwordEncoder.encode(registration.getPassword()));
        return registration;
    }
}
