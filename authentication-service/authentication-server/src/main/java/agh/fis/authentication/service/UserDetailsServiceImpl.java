package agh.fis.authentication.service;

import agh.fis.authentication.client.CustomerServiceClient;
import agh.fis.authentication.mapper.CustomerToUserDetailsMapper;
import agh.fis.customers.model.CustomerAuthDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@Primary
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    private final CustomerServiceClient customerServiceClient;
    private final CustomerToUserDetailsMapper customerToUserDetailsMapper;

    public UserDetailsServiceImpl(CustomerServiceClient customerServiceClient, CustomerToUserDetailsMapper customerToUserDetailsMapper) {
        this.customerServiceClient = customerServiceClient;
        this.customerToUserDetailsMapper = customerToUserDetailsMapper;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        CustomerAuthDto customer;
        try {
            customer = customerServiceClient.getCustomerByMail(username);
        } catch (Exception e) {
            LOGGER.warn("Exception while executing customers service call: " + e.getMessage());
            throw new UsernameNotFoundException("Not able to retrieve user with username: " + username);
        }

        return Optional.ofNullable(customer)
                .map(customerToUserDetailsMapper::map)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }
}
