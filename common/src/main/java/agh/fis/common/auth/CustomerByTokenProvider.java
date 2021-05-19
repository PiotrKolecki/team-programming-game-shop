package agh.fis.common.auth;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.CheckTokenDto;
import feign.FeignException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerByTokenProvider {
    private static final Logger logger = LoggerFactory.getLogger(CustomerByTokenProvider.class);
    private static final String TOKEN_PREFIX = "Bearer ";

    private final AuthenticationClient authenticationClient;

    public CustomerByTokenProvider(AuthenticationClient authenticationClient) {
        this.authenticationClient = authenticationClient;
    }

    public Optional<AuthCustomerDto> provide(String token) {
        try {
            ResponseEntity<AuthCustomerDto> entity = authenticationClient.checkToken(createCheckTokenDto(token));
            return Optional.ofNullable(entity.getBody());
        } catch (FeignException e) {
            logger.error("Error during checking token: " + token, e);
            return Optional.empty();
        }
    }

    private CheckTokenDto createCheckTokenDto(String token) {
        return new CheckTokenDto().token(token.split(TOKEN_PREFIX)[1]);
    }
}