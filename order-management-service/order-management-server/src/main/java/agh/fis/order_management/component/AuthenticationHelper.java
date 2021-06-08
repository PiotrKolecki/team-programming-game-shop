package agh.fis.order_management.component;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.CheckTokenDto;
import agh.fis.common.auth.AuthenticationClient;
import agh.fis.order_management.service.OrderService;
import io.fabric8.kubernetes.client.KubernetesClientException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
public class AuthenticationHelper implements IAuthenticationHelper {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private AuthenticationClient authenticationClient;

    @Override
    public AuthCustomerDto validateToken(String auth) {
        CheckTokenDto checkTokenDto = new CheckTokenDto();
        checkTokenDto.setToken(auth);
        try {
            ResponseEntity<AuthCustomerDto> customerDtoResp = authenticationClient.checkToken(checkTokenDto);
            if (customerDtoResp.getStatusCode() == HttpStatus.OK && customerDtoResp.hasBody()) {
                return customerDtoResp.getBody();
            } else {
                logger.warn("Authorization failed");
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception exc) {
            logger.error("Authorization failed due to internal server error");
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
