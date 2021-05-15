package agh.fis.authentication.service;

import agh.fis.authentication.client.CustomerServiceClient;
import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.security.jwt.JwtGenerator;
import agh.fis.authentication.security.jwt.JwtParser;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class JwtTokenService {
    private final JwtGenerator jwtGenerator;
    private final JwtParser jwtParser;
    private final UserDetailsService userDetailsService;
    private final CustomerServiceClient customerServiceClient;
    private final ModelMapper modelMapper;

    public JwtTokenService(JwtGenerator jwtGenerator, JwtParser jwtParser, UserDetailsService userDetailsService, CustomerServiceClient customerServiceClient, ModelMapper modelMapper) {
        this.jwtGenerator = jwtGenerator;
        this.jwtParser = jwtParser;
        this.userDetailsService = userDetailsService;
        this.customerServiceClient = customerServiceClient;
        this.modelMapper = modelMapper;
    }

    public String generateToken(Authentication authentication) {
        return jwtGenerator.createToken(authentication);
    }

    public Optional<UserDetails> getUserDetailsFromToken(String token) {
        return Optional.ofNullable(token)
                .map(jwtParser::retrieveSubject)
                .map(userDetailsService::loadUserByUsername);
    }

    public Optional<AuthCustomerDto> getCustomerFromToken(String token) {
        return Optional.ofNullable(token)
                .map(jwtParser::retrieveSubject)
                .map(customerServiceClient::getCustomerByMail)
                .map(user -> modelMapper.map(user, AuthCustomerDto.class));
    }

    public boolean validateToken(String token) {
        return jwtParser.validate(token);
    }
}
