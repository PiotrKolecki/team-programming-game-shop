package agh.fis.authentication.service;

import agh.fis.authentication.client.CustomerServiceClient;
import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.RegistrationDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class RegistrationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RegistrationService.class);

    private final CustomerServiceClient customerServiceClient;
    private final ModelMapper modelMapper;

    public RegistrationService(CustomerServiceClient customerServiceClient, ModelMapper modelMapper) {
        this.customerServiceClient = customerServiceClient;
        this.modelMapper = modelMapper;
    }

    public Optional<AuthCustomerDto> register(RegistrationDto registrationDto) {
        try {
            return Optional.of(registrationDto)
                    .map(registration -> modelMapper.map(registration, CustomerRegistrationDto.class))
                    .map(customerServiceClient::register)
                    .map(customer -> modelMapper.map(customer, AuthCustomerDto.class));
        } catch (Exception e) {
            LOGGER.warn("Exception while user registration: " + e.getMessage());
            return Optional.empty();
        }
    }
}
